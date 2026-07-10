// 반복문 : for( 초기값 ; 조건식 ; 증감식 ){ 실행문 }
// 배열 과 반복문 관계 : 배열의 인덱스는 0부터 요소/자료가 저장되는 순서 규칙
// 즉] 인덱스는 0부터 마지막인덱스까지 1씩증가

// [1] 배열의 데이터를 하나씩 출력
let 과일목록 = ['사과','포도','딸기']
// 1. 
console.log( 과일목록[0] )
console.log( 과일목록[1] )
console.log( 과일목록[2] )
// 2. .length 란? 배열내 요소/자료 개수 반환 , 마지막인덱스(총개수-1) : 배열.length - 1
for( let 인덱스 = 0 ; 인덱스 <= 과일목록.length - 1 ; 인덱스++ ){ console.log( 과일목록[ 인덱스 ] ) }

// [*생각해보기] 3개의 이름을 입력받아 배열에 저장하고 배열에 저장된 이름들을 HTML 출력하시오.
/*
let 이름목록 = [ ] // 빈 배열 선언하여 변수에 저장 
for( let 반복수 = 1 ; 반복수 <= 3 ; 반복수++ ) { // 1부터 3까지 1씩증가하면서 입력, 저장 , 출력
    let 입력 = prompt('입력:') // 입력 
    이름목록.push( 입력 ) // 저장 
}
// 반복문 이용한 HTML 구성 
let html = ``
for( let 인덱스 = 0 ; 인덱스 <= 이름목록.length - 1 ; 인덱스++ ){
    html += `<li> ${ 이름목록[ 인덱스 ] } </li>`
}
document.querySelector('ol').innerHTML = html
*/

// 문제1 : 
for( let 수 = 1 ; 수 <= 10 ; 수++ ){ console.log( 수 ) }
// 문제2 : 반복문의 반복변수는 주로 i( 이터레이터 )
let fruits = ['사과' , '바나나','포도','딸기']
for( let i = 0 ; i<fruits.length ; i++ ){ console.log( fruits[i] )}
// 문제3 : 마지막인덱스 : 배열명.length - 1 
let numbers = [ 1 , 2 ,3 , 4 ,5 ]
for( let i = numbers.length - 1 ; i >= 0 ; i--  ){// 마지막인덱스 부터 0 까지 1씩감소
    console.log( numbers[ i ])
}
// 문제4
let 합 = 0 ; 
for( let 수 = 1 ; 수<= 50 ; 수++ ){ 
    합 = 합 + 수  // 합 += 수
}
console.log( 합 )
// 문제5 
for( let i = 1 ; i <= 20 ; i++ ){ // i 가 1 부터 20까지 1씩증가
    // 짝수찾기( 값 % 2 == 0 )
    if( i % 2 == 0 ) console.log( i )
}

// 반복문 제어키워드 
// 1. continue; 반복문의 증감식으로 이동 
for( let 반복수 = 1 ; 반복수 <= 5 ; 반복수++ ){
    // 만약에 반복수가 3이면 continue 만나면 코드흐름이 증감식으로 이동한다.  
    if( 반복수 == 3 ){ continue } // 반복문의 *증감식*으로 흐름 이동
    console.log( 반복수 ) // 즉] 반복수가 3이면 console.log 실행안됨.
}
// 2. break; 반복문의 탈출/종료
for( let 반복수 = 1 ; 반복수 <= 5 ; 반복수++ ){
    if( 반복수 == 3 ){ break } // break 만나면 for문의 끝나는 } 중괄호 밖으로 이동 
    console.log( 반복수 )
} 
// !!여기로 이동!!

// 3. 무한루프 ( 무한반복 ) *특정조건의 break 권장*
// for(  ;  ; ){ console.log( '무한출력중') }
// for( ; ; ){ 
//     let 입력 = prompt()         // 무한입력 
//     if( 입력 == 'EXIT'){ break }// 입력한 값이 'EXIT' 이면 무한루프 종료
// } 

// 문제6
let scores = [ 85, 92, 78, 65, 95 ]
let 총점 = scores[0] + scores[1] + scores[2] + scores[3] + scores[4]
let 평균 = 총점/scores.length
// vs
let sum = 0;
for( let 인덱스 = 0 ; 인덱스 <= scores.length - 1 ; 인덱스++ ){
    sum += scores[ 인덱스 ]
}
console.log( `총점 : ${ sum } 평균 : ${ sum / scores.length }`)
// 문제7
let scores2 = [ 77 , 82 , 100 , 54, 96 ];
for( let 인덱스 = 0 ; 인덱스 <= scores2.length - 1 ; 인덱스++ ){
    if( scores2[ 인덱스 ] == 100 ){ console.log("100점 찾습니다"); break; }
}
// 문제8
let score3 = [ 90 , 45 , 72 , 88 , 59 , 100 ]
for( let 인덱스 = 0 ; 인덱스 <= score3.length - 1 ; 인덱스++ ){
    if( score3[인덱스] < 60 ){ continue }
    console.log( score3[인덱스] )
}

// 문제9
let bloodTypes = [ 'A' , 'B' , 'O' , 'AB' , 'A' , 'B' , 'A' ]
let count = 0 ; // A형 조건에 충족하는 수 저장 
for( let i = 0 ; i <= bloodTypes.length - 1 ; i++ ){
    let value = bloodTypes[ i ] // i(index) 번째 배열내 값 호출 
    if( value == 'A' ){ count += 1 }
}
console.log( count )
// 문제10 
let nameArray = ['유재석' , '강호동' , '신동엽' ]
let scores4 = [ 92 , 86 , 72 ]
let html = `` // html에 출력할 문자열 저장하는 변수 
// ㅁ+한자키 , ○ ●
for( let index = 0 ; index <= nameArray.length - 1 ; index++ ){ // 3회전 
    // 이름 대입 
    html = html + nameArray[index]
    // 점수 대입 
    // html = html + scores4[index]
    // 점수 도형으로 변경 , 점수에 나누기 10 했을때 10자리수 구하기.
    for( let 도형수 = 1 ; 도형수 <= 10 ; 도형수++ ){            // 10회전 
        if( scores4[index] / 10 > 도형수 ){ html = html + "●" }
        else{ html = html + "○" }
    } // for end 
    // 이름 마다(1번 반복될때마다) 줄바꿈( br ) 대입 
    html = html + "<br />"
} // for end 
document.querySelector( "p" ).innerHTML = html; // 출력 
// 상위 for문이 1회 반복할때 마다 하위 for문은 전체 반복한다.
// 3회전 * 10회전 => 30회전 