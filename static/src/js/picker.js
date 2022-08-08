 $("#dt_class").MdPersianDateTimePicker({
    targetDateSelector: "#inputDate3",
    targetTextSelector: "#showDate_class",
    textFormat: " dddd dd MMMM yyyy ",
    isGregorian: false,
    modalMode: true,
    englishNumber: false,
    calendarViewOnChange: function(param1){
      console.log(param1);
    }
  });