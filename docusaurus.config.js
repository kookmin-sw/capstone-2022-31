// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */

// @ts-ignore
const projectName = "capstone-2022-31";

const config = {
	title: "Kookmin SW Capstone 2022 31조",
	tagline: "Kookmin SW Capstone 2022",
	url: "https://kookmin-sw.github.io/",
	baseUrl: `/${projectName}/`,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "kookmin-sw", // Usually your GitHub org/user name.
	projectName, // Usually your repo name.
	deploymentBranch: "gh-pages",
	presets: [
		[
      '@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
          id: "blog",
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
					showReadingTime: true,
          routeBasePath: '/log',
          path: "blog",
					// Please change this to your repo.
					editUrl:
						"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
        // log: {
				// 	showReadingTime: true,
				// 	// Please change this to your repo.
        //   routeBasePath: '/log',
        //   path: "log",
				// 	editUrl:
				// 		"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				// },
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
	themeConfig: {
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Tutorial",
        },
        { to: "/log", label: "Meeting log", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/kookmin-sw/capstone-2022-31",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} capstone-2022-31, Kookmin SW Univ.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  }
};

module.exports = config;
