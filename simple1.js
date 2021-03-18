function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요  취소' : '좋아요';
    return React.createElement(
        'button',
        { onClick: () => setLiked(!liked)},
        text,
    ) // 문자열 입력시 html 태그 생성
}
// const domContainer = document.getElementById('root');
// ReactDOM.render(React.createElement(LikeButton), domContainer);

const domContainer1 = document.getElementById('root1');
ReactDOM.render(
    React.createElement(
        'div',
        null,
        React.createElement(LikeButton),
        React.createElement(LikeButton),
        React.createElement(LikeButton),
    ),
    domContainer1,
)

// const domContainer1 = document.getElementById('root1');
// ReactDOM.render(React.createElement(LikeButton), domContainer1);
// const domContainer2 = document.getElementById('root2');
// ReactDOM.render(React.createElement(LikeButton), domContainer2);
// const domContainer3 = document.getElementById('root3');
// ReactDOM.render(React.createElement(LikeButton), domContainer3);


// type, [props], [...children]
// React.createElement(
//     'div',
//     null,
//     React.createElement('p',null,'hello'),
//     React.createElement('p',null,'world'),
// );