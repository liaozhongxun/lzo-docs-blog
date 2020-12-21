module.exports = {
    // someSidebar: {
    //   Docusaurus: ['doc1', 'doc2', 'doc3'],
    //   Features: ['mdx'],
    // },

    // docs: [
    //   {
    //     type: 'category',
    //     label: 'Getting Started',
    //     items: ['doc2','doc3'],
    //   },
    //   {
    //     type: 'category',
    //     label: 'Docusaurus',
    //     items: ['doc1'],
    //   },
    // ],

    docs: {
        客户端: [
            {
                type: "category",
                label: "JavaScript",
                items: [
                    "web/script-es6",
                    "web/script-js",
                    "web/jsmodel/script-model-promise",
                    "web/jsmodel/script-model-server",
                    "web/jsmodel/script-model-browser",
                ],
            },
            {
                type: "category",
                label: "Style",
                items: ["web/style-css3", "web/style-flex"],
            },
            {
                type: "category",
                label: "Vue",
                items: ["web/vue-vuecli", "web/web-app-uniapp"],
            },
            {
                type: "category",
                label: "自动化构建",
                items: [
                    "web/tool/web-tool-npm",
                    "web/tool/web-tool-gulp",
                    "web/tool/web-tool-fis3",
                ],
            },
            {
                type: "category",
                label: "库",
                items: [
                    "web/library/web-library-mockjs",
                    "web/library/web-library-threejs",
                ],
            },
        ],
        服务器: [
            {
                type: "category",
                label: "NodeJS",
                items: ["server/server-nodejs","server/server-mongodb"],
            },
        ],
        编辑器: ["idea/idea-vscode"],
        其他: [
            "other/other-markdown",
            "other/other-nvm",
            "other/other-plugin",
            "other/other-git",
            "other-weblinks",
        ],
    },
};
