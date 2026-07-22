let team = [ {tcode: 1, tname: '개발팀'},{ tcode:2, tname: '디자인팀'},{tcode: 3, tname: '기획팀' } ];

let position = [ {pcode: 1, pname: '선임 개발자'},{ pcode:2, pname: '수석 디자이너'},{pcode: 3, pname: '팀장' } ];

let staff = [{ scode: 1, sname: '김민준', pcode: 1 ,simage: 'https://placehold.co/100', tcode: 1},
            {scode: 2, sname: '이서연', pcode: 2 , simage: 'https://placehold.co/100',tcode: 2},
            {scode: 3, sname: '박도윤', pcode:3, simage: 'https://placehold.co/100', tcode: 3}];

let vacation = [{ vcode: 1, scode: 1, vstart: '2026-07-25', vend: '2026-07-27', vstory: '여름휴가'},
                {vcode: 2, scode: 2, vstart: '2026-08-01', vend: '2026-08-02', vstory: '병원 진료'}];

// 가운데 
TotalPrint()
function TotalPrint(){
    let tbody = document.querySelector('.card-sub-section table tbody')
    let html = ''
    for(let i=0; i<staff.length; i++){
        let Total = staff[i]
        let tname = '';
        let pname = '';
        for( let j = 0 ; j < team.length ; j++ ){
            if(team[j].tcode == Total.tcode){
                tname = team[j].tname;
                break;
            }
        }

        for(let k=0; k<position.length; k++){
            if(position[k].pcode == Total.pcode){
                pname = position[k].pname
                break
            }
        }   
        html += `<tr>
              <td><img src=${Total.simage}></td>
              <td>${Total.sname}</td>
              <td>${tname}</td>
              <td>${pname}</td>
              <td class="action-links align-right">
                <a href="#" class="link-edit" onClick="staffUpdate(${Total.scode})">수정</a>
                <a href="#" class="link-delete" onClick="staffDelete(${Total.scode})">삭제</a>
              </td>
            </tr>`
    }
    tbody.innerHTML = html
}

// 삭제
function staffDelete(scode){
    for(let i=0; i<staff.length; i++){
        if(staff[i].scode == scode){
            staff.splice(i,1)
            alert('삭제 완료')
            TotalPrint()    
            return
        }
    }
}

// 수정
function staffUpdate(scode){
    for(let i=0; i<staff.length; i++){
        if(staff[i].scode == scode){
            let newSname = prompt('수정할 이름을 입력하세요')
            let newTname = prompt('수정할 부서의 번호를(1~3) 입력하세요')
            let newPname = prompt('수정할 직급의 번호를(1~3) 입력하세요')
            staff[i].sname = newSname
            staff[i].tcode = newTname
            staff[i].pcode = newPname
            TotalPrint(); return;
        }
    }
}

//등록
let finalstaff = 3
function staffAdd(){
    let name = document.querySelector('.name').value
    let position = document.querySelector('.position').value
    let team = document.querySelector('.team').value
    let image = document.querySelector('.image').value.files
    if(team == 'disabled'){
        alert('부서명을 선택해주세요');
        return;
    }
    let object = {
        tcode:team, pcode:position, sname:name, 
        simage : image == undefined ? 'https://placehold.co/100' : URL.createObjectURL(simage),
        scode : finalstaff+1 }
    staff.push(object); finalstaff += 1
    alert('등록 완료');
    TotalPrint()
}

// 부서 추가
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

// 휴가

totalPrint();
function totalPrint() {

    let staffSelect = document.querySelector('.staffSelect');
    let optionHtml = `<option value="disabled" selected disabled> 휴가 신청 사원을 선택하세요 </option>`;

    for (let index = 0; index < staff.length; index++) {

        let staffInfo = staff[index];

        optionHtml += `
            <option value="${staffInfo.scode}">
                ${staffInfo.sname}
            </option>
        `;
    }

    staffSelect.innerHTML = optionHtml;
    let vacationList = document.querySelector('#vacationList');
    let html = '';

    for (let index = 0; index < vacation.length; index++) {

        let vacationInfo = vacation[index];
        let staffName = '';

        for (let staffIndex = 0; staffIndex < staff.length; staffIndex++) {

            if (staff[staffIndex].scode == vacationInfo.scode) {
                staffName = staff[staffIndex].sname;
                break;
            }
        }

        html += `
            <div class="vacationItem">

                <div class="vacationContent">
                    <h3>${staffName}</h3>
                    <p>
                        ${vacationInfo.vstart}
                        ~
                        ${vacationInfo.vend}
                    </p>
                    <p>
                        사유: ${vacationInfo.vstory}
                    </p>
                </div>

                <div class="vacationButtonArea">
                    <button
                        type="button"
                        class="cancelBtn"
                        onclick="vacationDelete(${vacationInfo.vcode})">
                        신청취소
                    </button>
                </div>
            </div>
        `;
    }

    if (vacation.length == 0) {

        html = `
            <div class="emptyMessage">
                등록된 휴가 신청 내역이 없습니다.
            </div>
        `;
    }
    vacationList.innerHTML = html;
}

function vacationAdd() {
    let scode = document.querySelector('.staffSelect').value;
    let vstart = document.querySelector('.startDate').value;
    let vend = document.querySelector('.endDate').value;
    let vstory = document.querySelector('.reason').value.trim();

    if (scode == 'disabled' || scode == '') {
        alert('휴가를 신청할 사원을 선택해주세요.');
        return;
    }
    if (vstart == '') {
        alert('휴가 시작일을 선택해주세요.');
        return;
    }
    if (vend == '') {
        alert('휴가 종료일을 선택해주세요.');
        return;
    }
    if (vstory == '') {
        alert('휴가 사유를 입력해주세요.');
        return;
    }
    
    let object = {
        vcode: finalVcode + 1,
        scode: Number(scode),
        vstart: vstart,
        vend: vend,
        vstory: vstory
    };

    vacation.push(object);
    finalVcode++;

    alert('휴가 신청이 완료되었습니다.');
    document.querySelector('.staffSelect').value = 'disabled';
    document.querySelector('.startDate').value = '';
    document.querySelector('.endDate').value = '';
    document.querySelector('.reason').value = '';
    totalPrint();
}

let finalVcode = 2;
function vacationDelete(vcode) {
    for (let index = 0; index < vacation.length; index++) {
        if (vacation[index].vcode == vcode) {
            vacation.splice(index, 1);
            alert('휴가 신청이 취소되었습니다.');
            totalPrint();
            return;
        }
    }
}