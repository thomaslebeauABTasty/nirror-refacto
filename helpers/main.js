import isString from 'lodash/isString';

/**
 *
 */

export function encryptString(value) {
	let stringEncrypted = '';
	if (isString(value)) {
		stringEncrypted = value.replace(/./g, '*');
	} else {
		stringEncrypted = value;
	}
	return stringEncrypted;
}

/**
 * @name toJSON
 * @param {Object} node
 * @param {Boolean} recursive
 */

export function toJSON(node, recursive) {

	const Node = {
		ELEMENT_NODE: 1,
		ATTRIBUTE_NODE: 2,
		TEXT_NODE: 3,
		CDATA_SECTION_NODE: 4,
		ENTITY_REFERENCE_NODE: 5,
		ENTITY_NODE: 6,
		PROCESSING_INSTRUCTION_NODE: 7,
		COMMENT_NODE: 8,
		DOCUMENT_NODE: 9,
		DOCUMENT_TYPE_NODE: 10,
		DOCUMENT_FRAGMENT_NODE: 11,
		NOTATION_NODE: 12
	};

	if (node === null) {
		return null;
	}

	let data = {
		nodeType: node.nodeType
	};
	switch (data.nodeType) {
		case Node.DOCUMENT_NODE:
			let docType = node.doctype;
			data.name = docType.name;
			data.publicId = docType.publicId;
			data.systemId = docType.systemId;
			break;
		case Node.DOCUMENT_TYPE_NODE:
			let doctType = node;
			data.name = doctType.name;
			data.publicId = doctType.publicId;
			data.systemId = doctType.systemId;
			break;
		case Node.COMMENT_NODE:
		case Node.TEXT_NODE:
			data.textContent = node.textContent || node.data;
			break;

		case Node.ELEMENT_NODE:
			let elm = node;
			data.tagName = elm.tagName;
			data.attributes = {};
			for (let i = 0; i < elm.attributes.length; i++) {
				let attr = elm.attributes[i];
				data.attributes[attr.name] = attr.value;
			}

			if (recursive && elm.childNodes.length) {
				data.childNodes = [];
				for (let child = elm.firstChild; child; child = child.nextSibling) {
					data.childNodes.push(toJSON(child, true));
				}
			}
			break;
	}

	return data;
}
