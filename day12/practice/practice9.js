let team = [
    { tcode: 1, tname: '개발팀' },
    { tcode: 2, tname: '디자인팀' },
    { tcode: 3, tname: '기획팀' }
];

let staff = [
    { scode: 1, sname: '김민준', tcode: 1 },
    { scode: 2, sname: '이서연', tcode: 2 },
    { scode: 3, sname: '박도윤', tcode: 3 }
];


// [1] 전체조회
teamPrint();
function teamPrint(){

    let tbody = document.querySelector('.col-left table tbody');
    let html = '';
    for(let index = 0; index <= team.length - 1; index++){
        let teamObject = team[index];
        html += `
            <tr>
                <td>${teamObject.tname}</td>
                <td class="action-links align-right">
                    <a href="#" class="link-edit"
                       onclick="teamUpdate(${teamObject.tcode})">
                        수정
                    </a>

                    <a href="#" class="link-delete"
                       onclick="teamDelete(${teamObject.tcode})">
                        삭제
                    </a>

                </td>
            </tr>
        `;
    }

    tbody.innerHTML = html;
}

// [2] 삭제
function teamDelete(tcode){

    // 사원이 있는지 검사
    for(let i = 0 ; i <= staff.length-1 ; i++){
        if(staff[i].tcode == tcode){
            alert('소속 사원이 있어서 삭제할 수 없습니다.');
            return;
        }
    }

    // 삭제
    for(let index = 0 ; index <= team.length-1 ; index++){
        if(team[index].tcode == tcode){
            team.splice(index,1);
            alert('삭제 성공');
            teamPrint();
            return;
        }
    }
}


// [3] 수정
function teamUpdate(tcode){
    for(let index = 0 ; index <= team.length-1 ; index++){
        if(team[index].tcode == tcode){
            let newTname = prompt('수정할 부서명을 입력하세요.');
            team[index].tname = newTname;
            teamPrint();
            return;
        }
    }
}


// [4] 등록
let finalTcode = 3;
function teamAdd(){
    let tname = document.querySelector('.teamName').value;
    if(tname == ''){
        alert('부서명을 입력하세요.');
        return;
    }

    for(let index = 0 ; index <= team.length-1 ; index++){
        if(team[index].tname == tname){
            alert('이미 존재하는 부서입니다.');
            return;
        }
    }

    let object = {
        tcode : finalTcode + 1,
        tname : tname
    };

    team.push(object);
    finalTcode += 1;
    alert('등록 성공');
    teamPrint();
}