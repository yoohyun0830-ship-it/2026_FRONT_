function bw(){

    const ti = document.querySelector('#ti');
    const ci = document.querySelector('#ci');
    const pi = document.querySelector('#pi');

    const t = ti.value;
    const c = ci.value;
    const p = pi.value;

    const obj = { t, c, p };

    let boardList = localStorage.getItem('boardList');

    if(boardList == null){
        boardList = [];
    }else{
        boardList = JSON.parse(boardList);
    }

    obj.no = boardList.length == 0? 1: boardList[boardList.length - 1].no + 1;
    boardList.push(obj);

    localStorage.setItem(
        'boardList',
        JSON.stringify(boardList)
    );

    alert('게시물 등록 성공!');
    location.href = 'list.html';
}