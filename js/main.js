/*
$(document).ready(function () {
    $('#school_btn').click(function (){
        $('#school_LForm').show();
    });
    $('#school_signup').click(function () {
        $('#school_LForm').hide();
        $('#school_SForm').show();
    });
    $('#school_signin').click(function () {
        $('#school_SForm').hide();
        $('#school_LForm').show();
    });
});
*/

function shortID(element){
    return document.getElementById(element);
}

shortID('reg_schoolBtn').addEventListener('click', function(){
    //teacher
    shortID('teacher_RForm').style.display = 'none';
    shortID('teacher_LForm').style.display = 'none';

    //parent
    shortID('parent_RForm').style.display = 'none';
    shortID('parent_LForm').style.display = 'none';

    //student
    shortID('student_RForm').style.display = 'none';
    shortID('student_LForm').style.display = 'none';

    //school
    shortID('school_RForm').style.display = '';
    shortID('school_LForm').style.display = '';
});

shortID('reg_teacherBtn').addEventListener('click', function(){
    //school
    shortID('school_RForm').style.display = 'none';
    shortID('school_LForm').style.display = 'none';

    //parent
    shortID('parent_RForm').style.display = 'none';
    shortID('parent_LForm').style.display = 'none';

    //student
    shortID('student_RForm').style.display = 'none';
    shortID('student_LForm').style.display = 'none';

    //teacher
    shortID('teacher_RForm').style.display = '';
    shortID('teacher_LForm').style.display = '';
});

shortID('reg_parentBtn').addEventListener('click', function(){
    //school
    shortID('school_RForm').style.display = 'none';
    shortID('school_LForm').style.display = 'none';

    //teacher
    shortID('teacher_RForm').style.display = 'none';
    shortID('teacher_LForm').style.display = 'none';

    //student
    shortID('student_RForm').style.display = 'none';
    shortID('student_LForm').style.display = 'none';

    //parent
    shortID('parent_RForm').style.display = '';
    shortID('parent_LForm').style.display = '';
});

shortID('reg_studentBtn').addEventListener('click', function(){
    //school
    shortID('school_RForm').style.display = 'none';
    shortID('school_LForm').style.display = 'none';

    //teacher
    shortID('teacher_RForm').style.display = 'none';
    shortID('teacher_LForm').style.display = 'none';

    //parent
    shortID('parent_RForm').style.display = 'none';
    shortID('parent_LForm').style.display = 'none';

    //student
    shortID('student_RForm').style.display = '';
    shortID('student_LForm').style.display = '';
});