// -------------------------------------------------------

// swiper

const bannerSlider = new Swiper('.banner-slider', {
  loop: true,
  pagination: {
    el: '.banner-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const catalogSlider = new Swiper('.catalog-slider', {
  loop: true,
});

// -------------------------------------------------------

// marketing

const marketing = document.querySelector('.marketing');
const marketingTitle = document.querySelector('.marketing__title');
const marketingWhenFrom = document.querySelector('.marketing__when-from');
let counter = 0;
let delay = 3000;

const data = [
  {
    title: 'Title of product 1',
    where: 'Moskow,Russia',
  },
  {
    title: 'Title of product 2',
    where: 'Kiev,Ukraine',
  },
  {
    title: 'Title of product 3',
    where: 'Rome, Italia',
  },
];

if (marketing) {
  // если такой элемент есть на странице , то код работает
  const closeMarketing = () => {
    marketing.classList.remove('marketing--visible');
  };

  const changeMarketing = () => {
    marketing.classList.add('marketing--visible');
  };

  const changeMarketingData = () => {
    marketing.classList.remove('marketing--visible');
    setTimeout(() => {
      marketing.classList.add('marketing--visible');
    }, delay - 1000);

    const stringTitle = `${data[counter].title}`;
    const stringWhere = `${data[counter].where}`;

    marketingTitle.textContent = stringTitle;
    marketingWhenFrom.textContent = stringWhere;

    counter++;

    if (counter === data.length) {
      counter = 0;
    }
  };

  setInterval(changeMarketingData, delay + delay);

  marketing.addEventListener('click', event => {
    if (event.target.classList.contains('marketing__close')) {
      closeMarketing();
    }
  });

  setTimeout(changeMarketing, delay);
}

// -------------------------------------------------------

// catalog filter

const catalogFiltersTop = document.querySelectorAll('.catalog-filter__top');
const catalogFilters = document.querySelectorAll('.catalog-filter');
const catalogFilterToggle = document.querySelector('.catalog-filter__toggle');
const hideFilters = document.querySelector('.hide-filters');

if (catalogFiltersTop) {
  catalogFiltersTop.forEach(el => {
    el.addEventListener('click', e => {
      e.currentTarget
        .closest('.catalog-filter')
        .classList.toggle('catalog-filter--open');
    });
  });

  hideFilters.addEventListener('click', e => {
    catalogFilters.forEach(el => {
      el.classList.remove('catalog-filter--open');
    });
  });
}
