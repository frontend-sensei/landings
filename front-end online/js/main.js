document.addEventListener("DOMContentLoaded", function(event) {

        // TABS PROGRAMM
    let control1 = document.getElementById('control1'),
        control2 = document.getElementById('control2'),

        tab1 = document.getElementById('tab1'),
        tab2 = document.getElementById('tab2'),

        // TABS TEACHER
        controlTabTeacher1 = document.getElementById('controlTabTeacher1'),
        controlTabTeacher2 = document.getElementById('controlTabTeacher2'),

        tabTeacher1 = document.getElementById('tabTeacher1'),
        tabTeacher2 = document.getElementById('tabTeacher2'),

        // Questions
        question = document.getElementsByClassName('question'),

        openModal = document.getElementsByClassName('btn-modal-video')[0],
        modal = document.getElementsByClassName('modal-wrap')[0];


    // listeners

    // TABS PROGRAMM
    control1.addEventListener('click', function() {
        remove(control2);
        remove(tab2);
        add(this);
        add(tab1);
    });
    control2.addEventListener('click',function() {
        remove(control1);
        remove(tab1);
        add(this);
        add(tab2);
    });

    // TABS TEACHER
    controlTabTeacher1.addEventListener('click',function() {
        remove(controlTabTeacher2);
        remove(tabTeacher2);
        add(this);
        add(tabTeacher1);
    });
    controlTabTeacher2.addEventListener('click',function() {
        remove(controlTabTeacher1);
        remove(tabTeacher1);
        add(this);
        add(tabTeacher2);
    });

    // QUESTIONS
    for (let i = 0; i < question.length; i++) {
        question[i].addEventListener('click', function()  {
            this.classList.toggle("active");
        });
    }

    // Open modal
    openModal.addEventListener('click', function() {
        modal.classList.add('active');
    });

    // Close modal
    modalOverlay.addEventListener('click', function() {
        modal.classList.remove('active');
    });

    // add and remove classes
    function remove(e) {
        e.classList.remove('active');
    }
    function add(e) {
        e.classList.add('active');
    }

    let cards = document.querySelectorAll('.team-card');

    for (let i = 0; i < cards.length; i++) {
        console.log(i);
        cards[i].addEventListener('mouseover', function() {
            this.classList.add('active');
        });
        cards[i].addEventListener('mouseout', function() {
            this.classList.remove('active');
        });
    }


});
