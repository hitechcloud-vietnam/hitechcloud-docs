/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  vpsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Cài đặt Minio trên Almalinux',
      items: [
        {
          type: 'doc',
          id: 'minio/huongdancaidat',
        },
      ],
    },
    {
      type: 'category',
      label: 'Cài đặt OLSPanel',
      items: [
        {
          type: 'doc',
          id: 'olspanel/huongdancaidat',
        },
      ],
    },
    {
      type: 'category',
      label: 'Cài đặt Odoo 18',
      items: [
        {
          type: 'doc',
          id: 'odo18/huongdancaidat',
        },
      ],
    },
    {
      type: 'category',
      label: 'Cài đặt EasyPanel',
      items: [
        {
          type: 'doc',
          id: 'easypanel/huongdancaidat',
        },
      ],
    },
    {
      type: 'category',
      label: 'Cài đặt Coolify',
      items: [
        {
          type: 'doc',
          id: 'coolify/huongdancaidat',
        },
      ],
    },
        {
      type: 'category',
      label: 'Cài đặt KeyHelp',
      items: [
        {
          type: 'doc',
          id: 'keyhelp/huongdancaidat',
        },
      ],
    },
     {
      type: 'category',
      label: 'N8N',
      items: [
        {
          type: 'doc',
          id: 'n8n/n8ndocker',
        },
        {
          type: 'doc',
          id: 'n8n/autoupdaten8n',
        },
         {
          type: 'doc',
          id: 'n8n/restore',
        },
        {
          type: 'doc',
          id: 'n8n/n8nsql',
        },
      ],
    },
      {
      type: 'category',
      label: 'Cài đặt NocoDB',
      items: [
        {
          type: 'doc',
          id: 'nocodb/nocodb',
        },
      ],
    },
     {
      type: 'category',
      label: 'Cài đặt Aapanel',
      items: [
        {
          type: 'doc',
          id: 'aapanel/aapanel',
        },
      ],
    },
    {
      type: 'category',
      label: 'Cài đặt FastPanel',
      items: [
        {
          type: 'doc',
          id: 'fastpanel/fastpanel',
        },
      ],
    },
    {
      type: 'category',
      label: 'Cài đặt Plesk',
      items: [
        {
          type: 'doc',
          id: 'plesk/plesk',
        },
      ],
    },
  ],
};

export default sidebars;
