boardPrint();
function boardPrint(){
    const bTb = document.querySelector('#bTb');
    let boardList = localStorage.getItem('boardList');
    if(boardList == null){
        boardList = [];
    }else{
        boardList = JSON.parse(boardList);
    }

    let html = '';
    for(let index = 0; index < boardList.length; index++){
        const obj = boardList[index];
        html += `
            <tr>
                <td>${obj.no}</td>
                <td>
                    <a href="view.html?no=${obj.no}">
                        ${obj.t}
                    </a>
                </td>
            </tr>
        `;
    }
    bTb.innerHTML = html;
}