let showMore = false;

const showFacts = () => {
  showMore = !showMore;
  if (showMore) {
    $('#fact4').show();
    $('#fact5').show();
    $('#show-more-btn').html('Show less');
  } else {
    $('#fact4').hide();
    $('#fact5').hide();
    $('#show-more-btn').html('Show more');
  }
};

const isValidAge = (value) => {
  return /^[1-9]\d*$/.test(value);
};

$(() => {
  $('#registration-form').submit(event => {
    const age = $('#registration-form-age').val();
    console.log(age);
    if (!isValidAge(age)) {
      event.preventDefault();
      $('#registration-form-age-error').show();
    }
  });
});
