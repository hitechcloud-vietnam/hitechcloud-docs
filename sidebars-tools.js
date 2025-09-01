/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  toolsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Chỉnh sửa Repo Ubuntu',
      items: [
        {
          type: 'doc',
          id: 'editrepoubuntu/dieuchinhrepo',
        },
      ],
    },
    {
      type: 'category',
      label: 'Cài đặt AdGuard Home',
      items: [
        {
          type: 'doc',
          id: 'adguard/adguard',
        },
      ],
    },
    {
      type: 'category',
      label: 'Cài đặt Trigger.dev v4',
      items: [
        {
          type: 'doc',
          id: 'trigger/trigger',
        },
      ],
    },
  ],
};

export default sidebars;
