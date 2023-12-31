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

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import { Fragment } from "@wordpress/element";
import {
	AlignmentToolbar,
	BlockControls,
	InnerBlocks,
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { PanelBody, ToolbarButton } from "@wordpress/components";
import { SelectControl } from "@wordpress/components";
import { __experimentalBoxControl as BoxControl } from "@wordpress/components";
import { RangeControl } from "@wordpress/components";
import { ToolbarGroup } from "@wordpress/components";
import { TextControl } from "@wordpress/components";
import Info from "./components/info/info";
import IconPicker from "./components/icon-picker";
// import { ColorPalette } from "@wordpress/components";
// import { ColorPicker } from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes = {}, setAttributes }) {
	const {
		content,
		tag,
		contentColor,
		backgroundColor,
		padding,
		margin,
		textAlign,
		radius,
		gallery,
		titles,
		icon,
	} = attributes;
	// console.log(icon);

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={textAlign}
					onChange={(value) => setAttributes({ textAlign: value })}
				></AlignmentToolbar>
				{gallery && (
					<ToolbarGroup>
						<ToolbarButton
							onClick={() => setAttributes({ gallery: "" })}
							icon="trash"
						/>
						<MediaUploadCheck>
							<MediaUpload
								multiple={true}
								gallery={true}
								onSelect={(media) =>
									setAttributes({
										gallery: media,
									})
								}
								allowedTypes={["image"]}
								value={gallery.map((image) => image.id)}
								render={({ open }) => {
									<ToolbarButton onClick={open} icon="edit"></ToolbarButton>;
								}}
							></MediaUpload>
						</MediaUploadCheck>
					</ToolbarGroup>
				)}
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("panel Title", "TestBlock")} initialOpen={true}>
					<BoxControl
						label={__("Custom padding", "Test block")}
						values={padding}
						onChange={(nextValues) =>
							setAttributes({
								padding: nextValues,
							})
						}
						allowReset={true}
					></BoxControl>
					<BoxControl
						label={__("Custom margin", "Test block")}
						values={margin}
						onChange={(nextValues) =>
							setAttributes({
								margin: nextValues,
							})
						}
						sides={["top", "bottom"]}
						allowReset={true}
					></BoxControl>
					<RangeControl
						label={__("Border radius", "Test block")}
						value={radius}
						onChange={(value) =>
							setAttributes({
								radius: value,
							})
						}
						min={0}
						max={100}
					></RangeControl>

					<SelectControl
						label={__("Select Tag", "Test Block")}
						value={tag}
						options={[
							{ label: __("H1", "Test Block"), value: "h1" },
							{ label: __("H2", "Test Block"), value: "h2" },
							{ label: __("H3", "Test Block"), value: "h3" },
							{ label: __("H4", "Test Block"), value: "h4" },
							{ label: __("H5", "Test Block"), value: "h5" },
							{ label: __("H6", "Test Block"), value: "h6" },
							{ label: __("p", "Test Block"), value: "p" },
						]}
						onChange={(value) =>
							setAttributes({
								tag: value,
							})
						}
					></SelectControl>
					{/* <p className="my-custom-color">{__("content-color", "text block")}</p> */}
					{/* <ColorPalette
						colors={[
							{ name: "red", color: "#f00" },
							{ name: "white", color: "#fff" },
							{ name: "black", color: "#000" },
						]}
						value={contentColor}
						onChange={(color) =>
							setAttributes({
								contentColor: color,
							})
						}
						clearable={true}
					></ColorPalette> */}
					{/* <ColorPicker
						color={contentColor}
						onChangeComplete={(value) =>
							setAttributes({
								contentColor: value.hex,
							})
						}
						enableAlpha={true}
					></ColorPicker> */}
				</PanelBody>
				<PanelBody title={__("Content", "test Block")}>
					<Info icon="admin-generic" title="Our Repeatable Title">
						{" "}
					</Info>
					<button
						onClick={() =>
							setAttributes({
								titles: [
									...titles,
									{
										id: titles.length + 1,
										title: "Default text",
									},
								],
							})
						}
					>
						Add New
					</button>
					{titles &&
						titles.map((item, index) => {
							return (
								<div key={index}>
									<TextControl
										label="Add Title"
										value={item.title}
										onChange={(value) => {
											const newTitles = [...titles];
											newTitles[index].title = value;
											setAttributes({ titles: newTitles });
										}}
									></TextControl>
								</div>
							);
						})}
				</PanelBody>
				<PanelColorSettings
					title={__("Color Settings", "Test Block")}
					initialOpen={false}
					colorSettings={[
						{
							value: contentColor,
							onChange: (value) => {
								setAttributes({
									contentColor: value,
								});
							},
							label: __("contentColor", "Test Block"),
						},
						{
							value: backgroundColor,
							onChange: (value) => {
								setAttributes({
									backgroundColor: value,
								});
							},
							label: __("Content Background", "Test Block"),
						},
					]}
				></PanelColorSettings>
				<PanelBody title="Settings">
					<IconPicker
						attrName="icon"
						attrValue={icon}
						setAttributes={setAttributes}
					></IconPicker>
				</PanelBody>
			</InspectorControls>

			<div
				{...useBlockProps({
					className: "block_info_custom_class",
				})}
				style={{
					borderRadius: `${radius}px`,
					background: backgroundColor,
					padding: `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`,
				}}
			>
				<RichText
					tagName={tag}
					value={content}
					onChange={(value) => setAttributes({ content: value })}
					allowedFormats={["core/bold", "core/italic"]}
					placeholder={__("Add list item...", "testblock")}
					style={{
						color: contentColor,

						textAlign: textAlign,
					}}
				></RichText>
				{gallery ? (
					<div className="gallery_container">
						{gallery.map((image, index) => {
							return (
								<div className="single_gallery_image" key={index}>
									<img src={image.url} alt={image.alt} />
								</div>
							);
						})}
					</div>
				) : (
					<MediaPlaceholder
						onSelect={(media) =>
							setAttributes({
								gallery: media,
							})
						}
						allowedTypes={["image"]}
						multiple={true}
						labels={{ title: "Add Images" }}
					></MediaPlaceholder>
				)}
				<InnerBlocks
					allowedBlocks={["core/image", "core/heading"]}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				></InnerBlocks>
				{titles &&
					titles.map((item, index) => {
						return <li key={index}>{item.title}</li>;
					})}
				<h4>Selected Icon</h4>
				<div className="selected-icon">
					<span className={`dashicons dashicons-${icon}`}></span>
				</div>
			</div>
		</Fragment>
	);
}
