/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { Fragment } from "@wordpress/element";
import { PanelBody } from "@wordpress/components";
import { TextControl } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;
	console.log(text);
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__("Panel Title", "TestBlock")} initialOpen={true}>
					<TextControl
						label={__("block content label", "TestBlock")}
						value={text}
						onChange={(v) => setAttributes({ text: v })}
					></TextControl>
				</PanelBody>
			</InspectorControls>
			<div className="block-info">
				<h2>{text}</h2>
			</div>
		</Fragment>
	);
}
