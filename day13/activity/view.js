getboard();

function getboard(){

    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    let boardList = localStorage.getItem('boardList');
    if(boardList == null){
        boardList = [];
    }else{
        boardList = JSON.parse(boardList);
    }

    for(let index = 0; index < boardList.length; index++){
        const obj = boardList[index];
        if(obj.no == selectNo){
            document.querySelector('#title').innerHTML = obj.t;
            document.querySelector('#content').innerHTML = obj.c;
            return;
        }
    }
}

function boardDelete(){

    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');

    let boardList = localStorage.getItem('boardList');
    if(boardList == null){
        boardList = [];
    }else{
        boardList = JSON.parse(boardList);
    }

    for(let i = 0; i < boardList.length; i++){
        const obj = boardList[i];
        if(obj.no == selectNo){
            const inputPwd = prompt('비밀번호 입력');
            if(obj.p == inputPwd){
                boardList.splice(i, 1);
                localStorage.setItem(
                    'boardList',
                    JSON.stringify(boardList)
                );

                alert('삭제 성공!');
                location.href = 'list.html';
            }else{
                alert('삭제 실패: 비밀번호가 불일치합니다.');
            }

            return;
        }
    }
}

function boardUpdateView(){

    const url = new URLSearchParams(location.search);
    const selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList');

    if(boardList == null){
        boardList = [];
    }else{
        boardList = JSON.parse(boardList);
    }

    for(let i = 0; i < boardList.length; i++){
        const obj = boardList[i];

        if(obj.no == selectNo){
            const inputPwd = prompt('비밀번호 입력');
            if(obj.p == inputPwd){
                location.href = `update.html?no=${selectNo}`;
            }else{
                alert('수정 불가: 비밀번호 불일치');
            }

            return;
        }
    }
}