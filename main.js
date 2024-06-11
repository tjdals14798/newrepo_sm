/*
    실습 Todo 리스트 만들기
        1. 사용자가 할 일을 입력한다.
        2. 등록버튼을 누른다.
            - 사용자가 입력한 '할일' 데이터를 가져온다.
            - 화면에 보여주기 위한 요소노드, 텍스트노드 생성
                -> 요소노드 : li, button | 텍스트 노드 : 사용자가 입력한 '할일', '삭제'
                -요소노드와 텍스트노드를 연결한다.
                -id가 'todoList'인 ul요소에 연결한다.

        3. 웹 페이지에 등록한 할 일이 출력된다.
        4. 삭제버튼을 누르면 해당되는 요소만 삭제된다.
            - 버튼에 클릭이벤트를 구현한다.
            - 부모요소.removeChild(삭제할 자식노드)
*/

const btn = document.frm.btn;
const list = document.querySelector("#list");

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const todo = document.frm.Todo.value;

    const new_li = document.createElement("li");
    const new_li_txt = document.createTextNode(todo);

    const new_btn = document.createElement("button");
    const new_li_btn = document.createTextNode("삭제");

    new_btn.appendChild(new_li_btn);
    new_btn.setAttribute("id", "btn2");

    new_li.appendChild(new_li_txt);
    new_li.appendChild(new_btn);

    list.appendChild(new_li);

    document.frm.Todo.value = "";
});

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn2') {
        console.log(e);
        const new_li = document.querySelector("#list>li");
        new_li.remove();
    }
});