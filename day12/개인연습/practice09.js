let team = [ {tcode: 1, tname: '개발팀'},{ tcode:2, tname: '디자인팀'},{tcode: 3, tname: '기획팀' } ];

let position = [ {pcode: 1, pname: '선임 개발자'},{ pcode:2, pname: '수석 디자이너'},{pcode: 3, pname: '팀장' } ];

let staff = [{ scode: 1, sname: '김민준', pcode: 1 ,cimage: 'https://placehold.co/100', tcode: 1},
                 {scode: 2, sname: '이서연', pcode: 2 , image: 'https://placehold.co/100',tcode: 2},
                 {scode: 3, sname: '박도윤', pcode:3, image: 'https://placehold.co/100', tcode: 3}];

let vacation = [{ vcode: 1, scode: 1, vstart: '2026-07-25', vend: '2026-07-27', vstory: '여름휴가'},
                {vcode: 2, scode: 2, vstart: '2026-08-01', vend: '2026-08-02', vstory: '병원 진료'}];

teamPrint()
function teamPrint(){
    let tbody = document.querySelector(".col-left align-right");
    let html = ""
    for( let index = 0 ; index <= team.length-1; index++){
        let teamObject = team[index]
        let tname = ''
        for( let )
    }
}