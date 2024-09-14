const schema = {
  imageAvatar: {
    c: 'Enh.Avatar',
    xs: 12,
    label: '图片头像',
    alt: 'alt content',
    src: 'https://s2.loli.net/2024/09/14/g6adqDxkCv14LZj.jpg',
    size: 64,
  },
  textAvatar: {
    c: 'Enh.Avatar',
    xs: 12,
    label: '文字头像',
    alt: 'alt content',
    content: 'T',
    bgColor: 'orange',
  },
  textBgAvatar1: {
    c: 'Enh.Avatar',
    xs: 12,
    label: '文字头像背景颜色1',
    alt: 'alt content',
    content: 'T',
    bgColor: '#1890ff',
    size: 64,
  },

  avatarGroup: {
    c: 'Enh.Avatar',
    xs: 12,
    label: '头像组',
    alt: 'alt content',
    src: [
      'https://s2.loli.net/2024/09/14/pFiQIzVUBu29NeE.jpg',
      'https://s2.loli.net/2024/09/14/g6adqDxkCv14LZj.jpg',
      'https://s2.loli.net/2024/09/14/2PkevRYnHGq46tb.jpg',
      'https://s2.loli.net/2024/09/14/KHXqLyimJSYjMek.jpg',
    ],
    size: 32,
  },
};

export default schema;
