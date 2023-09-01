/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */

import { RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	// console.log(attributes);
	const { content, tag, contentColor, backgroundColor, padding } = attributes;

	console.log(padding);
	return (
		<div
			{...useBlockProps.save({
				className: "block_info_custom_class",
			})}
		>
			<RichText.Content
				tagName={tag}
				value={content}
				style={{
					color: contentColor,
					background: backgroundColor,
					padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
				}}
			></RichText.Content>
		</div>
	);
}
