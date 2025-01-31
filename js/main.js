//show-hide menu box
$('.call-menu').click(function () {
    $('.menu-box').addClass('show');
    $('body').addClass('scroll-locked');
})
$('.close-menu-box').click(function () {
    $('.menu-box').removeClass('show');
    $('body').removeClass('scroll-locked');
})
let menuBoxTop = $('.header-top').height() + 30;
    $('.menu-box').css('top', ''+menuBoxTop + 'px');


//form-label
$(document).ready(function (){
    $('.form-label').each(function (){
        if($(this).find('input').val() != '') {
            $(this).closest('.form-label').addClass('form-label-done');
            $(this).closest('.select-label').removeClass('form-label-done');
        }
    });
    $('.form-label input').focus(function () {
        $(this).closest('.form-label').addClass('form-label-focus');
    });
    $('.form-label input').blur(function () {
        $(this).closest('.form-label').removeClass('form-label-focus');
        $(this).closest('.form-label').addClass('form-label-done');
        if ($(this).val() == '') {
            $(this).closest('.form-label').removeClass('form-label-focus');
            $(this).closest('.form-label').removeClass('form-label-done');
        }
    });
})


//phone-mask
$(document).ready(function () {
    $(".phone-mask").mask("8(999)999-9999");
})


//select2
$(document).ready(function() {
    $('.select-custom').select2({
        dropdownCssClass: 'select-option-menu',
        placeholder: '',
    });

    $('.select-custom').on('select2:open', function (e) {
        $(this).closest('.form-label').addClass('form-label-focus');
    });

    $('.select-custom').on('select2:close', function (e) {
        $(this).closest('.form-label').removeClass('form-label-focus');
        $(this).closest('.form-label').addClass('form-label-done');
        if ($(this).val() == '') {
            $(this).closest('.form-label').removeClass('form-label-done');
        }
    });
});

//calendar
$('.date-range').daterangepicker({
    opens: 'right',
    maxSpan: 365,
    linkedCalendars: false,
    locale: {cancelLabel: 'Сбросить', applyLabel: 'Выбрать', format: 'DD.MM.YYYY'},
    showDropdowns: false,
    autoUpdateInput: false,
    ranges: false,
});

$('.date-range').on('show.daterangepicker', function() {
    $(this).closest('.select-date').addClass('form-label-focus');
});

$('.date-range').on('hide.daterangepicker', function() {
    $(this).closest('.select-date').removeClass('form-label-focus');
});

$('.date-range').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
    $(this).closest('.select-date').removeClass('form-label-focus');
    $(this).closest('.select-date').addClass('form-label-done');
    if ($(this).val().length === 0) {
        $(this).closest('.select-date').removeClass('form-label-focus');
        $(this).closest('.select-date').removeClass('form-label-done');
    }
});

$('.date-range').on('cancel.daterangepicker', function(ev, picker) {
    $('.date-range').val('');
    $(this).closest('.select-date').removeClass('form-label-done');
});


$('.date-single').daterangepicker({
    opens: 'right',
    maxSpan: 365,
    singleDatePicker: true,
    linkedCalendars: false,
    locale: {cancelLabel: 'Сбросить', applyLabel: 'Выбрать', format: 'DD.MM.YYYY'},
    showDropdowns: false,
    autoUpdateInput: false,
    ranges: false,
});

$('.date-single').on('show.daterangepicker', function() {
    $(this).closest('.select-date').addClass('form-label-focus');
});

$('.date-single').on('hide.daterangepicker', function() {
    $(this).closest('.select-date').removeClass('form-label-focus');
});

$('.date-single').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('DD.MM.YYYY'));
    $(this).closest('.select-date').removeClass('form-label-focus');
    $(this).closest('.select-date').addClass('form-label-done');
    if ($(this).val().length === 0) {
        $(this).closest('.select-date').removeClass('form-label-focus');
        $(this).closest('.select-date').removeClass('form-label-done');
    }
});

$('.date-single').on('cancel.daterangepicker', function(ev, picker) {
    $('.date-range').val('');
    $(this).closest('.select-date').removeClass('form-label-done');
});


//search xs
$(document).ready(function () {
    if($(window).width() < 576) {
        $('.search-btn').click(function (){
            $(this).closest('.search-container').addClass('active')
        })
    }
})

//close modal
$('.close-modal').click(function (){
    $(this).closest('.modal').modal('hide');
})

//auto height of "main"
$(document).ready(function (){
    let headerHeight = $('header').outerHeight();
    let footerHeight = $('footer').outerHeight();
    let pageHeight = $(window).innerHeight();
    let offHeight = pageHeight - (headerHeight + footerHeight);
    $('main').css('min-height', offHeight + 'px')
})

//tooltip
$(document).ready(function (){
    $('.tooltip-content').each(function (){
        let altTop = $(this).closest('.tooltip-box').outerHeight();
        let altRight = $(this).closest('.tooltip-box').outerWidth() / 2;
        console.log(altTop, altRight)
        $(this).css('top', altTop + 4 + 'px');
        $(this).css('left', altRight + 'px');
    });
})




