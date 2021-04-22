const element = <a href="http://google.com">click here</a>;
const element = React.cloneElement(
    'a',
    { href: 'http://google.com' },
    'click here',
);