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
	const {
		content,
		tag,
		textAlign,
		contentColor,
		backgroundColor,
		padding,
		radius,
		url,
		alt,
		id,
	} = attributes;

	// console.log(padding);
	return (
		<div
			{...useBlockProps.save({
				className: "block_info_custom_class",
			})}
			style={{
				padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
				background: backgroundColor,
				borderRadius: `${radius}px`,
			}}
		>
			<RichText.Content
				tagName={tag}
				value={content}
				style={{
					color: contentColor,

					textAlign: textAlign,
				}}
			></RichText.Content>
			{url && <img src={url} alt={alt} />}
		</div>
	);
}
