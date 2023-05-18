const menuItems = [
  {
    label: 'HOME',
    route: '/',
    mobileOnly: true
  },
  {
    label: 'GAMES',
    menuItems: [
      { label: 'Kicking Games', route: '/games/kicking' },
      { label: 'Freestyle Footbag', route: '/games/freestyle' },
      { label: 'Footbag Net', route: '/games/net' }
    ]
  },
  {
    label: 'EVENTS',
    route: '/events'
  },
  // remove About page until the design is finalized
  // {
  //   label: 'ABOUT',
  //   route: '/about'
  // }
];

export default menuItems;
