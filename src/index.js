import ClassicEditor from "@ckeditor/ckeditor5/packages/ckeditor5-build-classic";
//import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

ClassicEditor.create(document.querySelector("#editor"), {
	math: {
		engine: "katex",
		outputType: "script",
		forceOutputType: false,
		enablePreview: true,
	},
})
	.then((editor) => {
		//CKEditorInspector.attach( editor );
		window.ckeditor = editor;

		editor.model.document.on("change:data", () => {});
	})
	.catch((err) => {
		console.error(err);
	});
