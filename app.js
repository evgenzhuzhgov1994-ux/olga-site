'use strict';
const prices = [
 {id:'group',css:'group',label:'ГРУППОВАЯ РАБОТА',name:'Фокус-группа',intro:'Для тех, кому важны общая динамика и поддержка участниц.',duration:'4 недели · доступ к материалам 6 месяцев',items:['Индивидуальный рацион питания','Готовое меню с рецептами на 2 недели','Ежедневная обратная связь от Ольги в групповом чате','Короткая онлайн-встреча до начала работы','Личная онлайн-встреча в программе','4 основных модуля программы','Еженедельные замеры и поддержка'],details:'Модули: питание, пищевое поведение, здоровье и спорт, психология. Сборники: 50 завтраков, 21 салат, мини-сборник напитков. Продуктовая корзина, шпаргалки по жирам и 80+ десертам, база тарелок и подборки продуктов.',price:'15.000 ₽',old:'20.000 ₽',date:'До 30 ноября</p><p>с 1 декабря — 18 000 ₽ до 31 декабря'},
 {id:'base',css:'base',label:'ИНДИВИДУАЛЬНОЕ СОПРОВОЖДЕНИЕ',name:'Базовый',intro:'Личная работа с питанием и привычками, фундамент для самостоятельности.',duration:'8 недель · доступ к материалам 1 год',items:['Ваша личная стратегия снижения веса','Индивидуальный рацион-конструктор','Готовое меню с рецептами на 3 недели','Ежедневная личная обратная связь и чат с Ольгой','Короткая онлайн-встреча до начала работы','Личная онлайн-встреча в программе','5 модулей и корректировка стратегии'],details:'Питание, пищевое поведение, здоровье и спорт, мотивация и дисциплина, психология стресса и эмоций. Все базовые материалы и дополнительные сборники напитков и полезных блинчиков. При необходимости — помощь с подготовкой к чек-апу и разбором результатов. Стоимость самих анализов оплачивается отдельно.',price:'40.000 ₽',old:'45.000 ₽',date:'Специальная цена до 31 декабря 2026'},
 {id:'optimal',css:'optimal',label:'ПИТАНИЕ + ПСИХОЛОГИЯ',name:'Оптимальный',intro:'Более глубокая индивидуальная работа с питанием и психологией веса.',duration:'8 недель · доступ к материалам 3 года',items:['Всё, что входит в «Базовый»','4 психологические сессии по 1,5–2 часа','Короткая онлайн-встреча до начала работы','Личная онлайн-встреча в программе','Практический модуль «Психология веса»','Интенсив «Психосоматика лишнего веса» в подарок','Личная психологическая поддержка'],details:'Работа с пищевыми привычками, упражнения под ваш запрос, сборник ПП-выпечки и десертов, сборник полезных перекусов. Четыре психологические сессии входят дополнительно к двум онлайн-встречам, предусмотренным во всех тарифах.',price:'60.000 ₽',old:'65.000 ₽',date:'Специальная цена до 31 декабря 2026'}
];
const tariffSections=[
 {title:'Формат и сроки',rows:[
 ['Сопровождение','4 недели','8 недель','8 недель'],
 ['Обратная связь','Ежедневно в группе','Ежедневно лично','Ежедневно лично'],
 ['Чат общения','Групповой','Личный с Ольгой','Личный с Ольгой'],
 ['Доступ к материалам','6 месяцев','1 год','3 года']
 ]},
 {title:'Питание и сопровождение',rows:[
 ['Индивидуальный рацион питания',true,true,true],
 ['Готовое меню с рецептами','На 2 недели','На 3 недели','На 3 недели'],
 ['Проверка рациона, рекомендации и ответы на вопросы',true,true,true],
 ['Короткая онлайн-встреча перед началом работы',true,true,true],
 
 ['Еженедельные замеры и отслеживание результата',true,true,true],
 ['Персональная стратегия и её корректировка',false,true,true],
 ['Сдача анализов, расшифровка и личные рекомендации',false,true,true]
 ]},
 {title:'Обучение и психологическая работа',rows:[
 ['Основные модули программы','4 модуля','5 модулей','6 модулей'],
 ['Питание',true,true,true],
 ['Пищевое поведение',true,true,true],
 ['Здоровье и спорт',true,true,true],
 ['Психология',true,true,true],
 ['Мотивация и дисциплина',false,true,true],
 ['Практический модуль «Психология веса»',false,false,true],
 ['Личная психологическая поддержка в чате',false,true,true],
 ['Индивидуальные психологические сессии',false,false,'4 сессии по 1 – 1,5 часа'],
 ['Интенсив «Психосоматика лишнего веса»',false,false,true],
 ['Глубокая работа с пищевыми привычками',false,false,true],
 ['Доп. материалы и упражнения под ваш запрос',false,false,true]
 ]},
 {title:'Сборники и рецепты',rows:[
 ['Завтраки',true,true,true],
 ['Салаты',true,true,true],
 ['Сборник жиросжигающих напитков','Мини-сборник','Большой сборник','Большой сборник'],
 ['Сборник полезных блинов',false,false,true],
 ['ПП-выпечка и десерты',false,false,true],
 ['ТОП-полезных перекусов',false,false,true],
 ['Продуктовая корзина',true,true,true],
 ['Подборки продуктов',true,true,true],
 ['База насмотренности тарелок',false,true,true],
 ['Шпаргалка по жирам',true,true,true],
 ['Шпаргалка по 80+ десертам из магазинов',false,true,true]
 ]}];
function tariffCell(value){return value===true?'<span class="tariff-check" role="img" aria-label="Входит">✓</span>':value===false?'<span class="tariff-minus" aria-label="Не входит">—</span>':value;}
function tariffNames(){return prices.map(p=>`<span class="tariff-heading ${p.css}">${p.name}</span>`);}
const names=tariffNames();
document.querySelector('#price-grid').innerHTML=`<div class="tariff-table-scroll" tabindex="0" role="region" aria-label="Сравнение трёх тарифов"><table class="tariff-table"><caption class="visually-hidden">Сравнение форматов взаимодействия с Ольгой Жужговой</caption><thead><tr><th scope="col">Что входит</th>${prices.map((p,i)=>`<th scope="col" id="price-${p.id}"><span class="tariff-work-type">${i===0?'Групповая работа':'Личная работа'}</span>${names[i]}</th>`).join('')}</tr></thead><tbody>${tariffSections.map(section=>`<tr class="tariff-section-row"><th colspan="4">${section.title}</th></tr>${section.rows.map(row=>`<tr><th scope="row">${row[0]}</th>${row.slice(1).map(value=>`<td>${tariffCell(value)}</td>`).join('')}</tr>`).join('')}`).join('')}</tbody></table></div><p class="tariff-analysis-note">Стоимость анализов не входит в сопровождение.</p>`;
const outcomeCategories=[
{title:'Тело и здоровье',description:'Лёгкость, комфорт и хорошее самочувствие',image:'body-health.png',symbol:'♡',items:[
['01','Стабильное снижение веса','Без жёстких диет и подсчёта калорий','↘'],
['02','Стройное и красивое тело','Комфорт в своём теле и отражении','♡'],
['03','Лёгкость и удовольствие','Без тяжести после еды','❧'],
['04','Хорошее пищеварение','Без вздутия и дискомфорта','✧']
]},
{title:'Питание и привычки',description:'Вкусный и сбалансированный рацион без запретов, научитесь питаться вне дома',image:'course-food.svg',symbol:'♧',items:[
['05','Вкусный и сбалансирован&shy;ный рацион','Любимые продукты в здоровом рационе','🥗'],
['06','Без тяги к сладкому и мучному','Свобода от постоянных срывов','🍰'],
['07','Здоровые пищевые привычки','Осознанное и комфортное питание на долгий срок','🍽'],
['08','Питание вне дома','Научитесь сбалансированно питаться в кафе, на встречах с друзьями, в праздники, в отпуске и в поездках','🍽']
]},
{title:'Внутреннее состояние',description:'Больше энергии, спокойствия и уверенности в себе',image:'course-psychology.svg',symbol:'❧',items:[
['09','Меньше тревоги и стресса','Эмоциональный баланс и спокойствие','❧'],
['10','Больше энергии и сил','Активность, продуктивность и хорошее настроение','ϟ'],
['11','Уверенность в себе','Принятие своего тела и гармония с собой','◇'],
['12','Сможете носить любимые вещи и кайфовать от себя в зеркале.','','♡']
]}
];
document.querySelector('#outcomes').innerHTML=outcomeCategories.map((category,index)=>`<article class="outcome-category category-${index}"><div class="outcome-category-header"><img src="${category.image}" alt="" loading="lazy"><div class="outcome-category-intro"><span aria-hidden="true">${category.symbol}</span><h3>${category.title}</h3><p>${category.description}</p></div></div><div class="outcome-category-items">${category.items.map(([number,title,description,icon])=>`<div class="change-item"><span class="change-icon" aria-hidden="true">${icon}</span><span class="change-number">${number}</span><div><h4>${title}</h4><p>${description}</p></div></div>`).join('')}</div></article>`).join('');
const faqs=[
  [
    "Нужно ли считать калории и отказываться от сладкого?",
    "Программа помогает выстроить сбалансированное питание без подсчёта калорий и жёстких запретов. Мы будем учиться выстраивать вкусный, сбалансированный рацион, включая любимые продукты, вкусняшки и учиться готовить полезные десерты. Чтобы после программы вы легко смогли поддерживать вес в форме."
  ],
  [
    "Есть ли личные встречи в фокус-группе?",
    "Да. Во всех трёх форматах сопровождения есть короткая онлайн-встреча перед началом работы, которая помогает сонастроиться и выстроить план к цели."
  ],
  [
    "Как долго доступны материалы?",
    "в фокус-группе — 6 месяцев, в личной работе «Базовый» — 1 год, «Оптимальный» - 3 года."
  ],
  [
    "Можно ли участвовать при беременности или с особенностями здоровья?",
    "Такая возможность есть. Расскажите о своей ситуации до записи на программу. На знакомстве обсудим цели и возможность участия, учитывая состояние здоровья конкретно в вашей ситуации."
  ],
  [
    "Можно ли оплатить в рассрочку?",
    "Да, такая возможность есть.\nДоступный срок, условия и точную сумму ежемесячного платежа уточним перед оформлением."
  ],
  [
    "Чем отличаются группа и личное сопровождение?",
    "В фокус-группе обратная связь проходит в общем чате в течение 1 месяца. Общий чат замеров и взвешивания. Здесь вы проходите только часть программы «Стройность из любви» (4 недели).\nВ индивидуальных форматах мы работаем в личном чате минимум 2 месяца. Это позволяет получить более стабильный результат. За это время вы проходите полноценную программу «Стройность из любви» (8 недель).\nВ «Оптимальном» варианте участия дополнительно включены четыре психологические сессии 1,5-2 часа с личными проработками раз в 2 недели и практическую работу с психологией веса."
  ],
  [
    "Придётся ли готовить отдельно для себя?",
    "В программе используются простые рецепты из доступных продуктов для всей семьи. Рацион учитывает ваши вкусы, привычки и образ жизни. Поэтому вы сможете готовить для всех вкусно и просто."
  ],
  [
    "Обязательны ли анализы и входят ли они в стоимость?",
    "В индивидуальной работе необходимость чек-апа обсуждается отдельно. В «Базовый» и «Оптимальный» входит помощь с подготовкой и разбором результатов, личные рекомендации по анализам. Сами анализы оплачиваются отдельно, но я помогаю сдать вам максимально выгодно без лишних затрат."
  ],
  [
    "Какой результат я получу за 4 или 8 недель?",
    "Темп снижения веса индивидуален и зависит от исходной ситуации, состояния здоровья и внедрения рекомендаций, а так де вашего желания.\nНа программе мы работаем с рационом, привычками и навыками, которые помогают двигаться к вашей цели.\nСредний темп снижения веса от -800 г до 1,5-2 кг в неделю.\nТак за 4 недели вы можете снизить от 3 кг до 6 кг.\nЗа 8 недель от 6,5 кг до 12 кг.\n\nВ зависимости от того, какую стратегию выбираете. Это обсуждаем индивидуально в начале работы."
  ],
  [
    "Если есть какие-то вопросы со здоровьем. На диету не смогу уйти?",
    "У нас с вами не жесткая диета, а сбалансированный вкусный рацион питания, сытный и разнообразный. Кроме того, здоровое питание показано при всех заболеваниях ЖКТ (удаленном желчном, запорах, дефицитах, изжоге, вздутиях, тяжести в животе).\n\nЕсли у вас дефицит железа, анемия, повышен холестерин мы все это вместе выявляем на программе или с учетом ваших данных выстраиваем лечебный рацион питания, который помогает вам не только грамотно худеть, но и улучшать состояние здоровья. Более подробно мы с этим разбираемся в индивидуальной работе, но в группе я так же даю отдельные рекомендации на старте работы."
  ],
  [
    "Можно совмещать программу и отпуск, если куда-то уеду?",
    "Я скажу, что даже нужно это делать. На любом этапе программы вы можете куда-то уехать, и мы останемся с вами на связи. Вы учитесь выстраивать ваш рацион питания вне дома, это позволяет вам формировать сразу больше навыков. Мои женщины постоянно куда-то ездят. Турция, Сочи, Казань, на теплоходе, путешествуют по городам России. Любая поездка впишется, потому что питание даже на снижении веса легко подстраивается под вашу жизнь, и вы формируете навыки на практике, тем самым не ставя свою стройность на паузу."
  ]
];
document.querySelector('#faq-list').innerHTML=faqs.map(([q,a])=>`<details><summary>${q}<span aria-hidden="true">+</span></summary><p>${a}</p></details>`).join('');
// Group alternate views of the same participant together.
const resultGroups=[{photos:[1,12],label:'−7,2 кг · −29 см · 4 месяца'},{photos:[2,3],label:'−20 кг · −75 см'},{photos:[4,5,6],label:'−13 кг · −57 см · 3 месяца'},{photos:[7],label:'−8,65 кг · −47 см · 4 месяца'},{photos:[8,11],label:'−26,25 кг · −73 см'},{photos:[9],label:'−9 кг · −21 см'},{photos:[10],label:'Итого −30 кг за полгода'}];
const resultEntries=Array.from({length:12},(_,i)=>({src:`result-${i+1}.jpg`,alt:`Результат участницы программы, оригинальное изображение ${i+1}`}));
const reviewEntries=Array.from({length:20},(_,i)=>({src:`review-${i+1}.jpg`,alt:`Отзыв участницы, оригинал ${i+1}`}));
const resultCropBoxes={1:[39,83,775,799],12:[39,83,775,799],2:[143,143,568,788],3:[47,89,760,767],4:[160,27,526,839],5:[59,55,736,815],6:[67,71,720,772],8:[48,39,757,757],11:[47,56,759,802]};
const resultStoryNotes={
  1:'За 4 месяца.',
  2:'За полгода. Даже в 60 лет возможно! Без голода и подсчета калорий.',
  4:'Раньше, когда начинала есть вкусности, не могла остановиться. Заедала стресс.',
  8:'С регулярным употреблением алкоголя. До этого женщине говорили: «Пока не бросите пить, не похудеете!» Пришлось менять весь гардероб, одежда уменьшилась на 2 размера.'
};
function resultPhoto(src,alt){const number=Number(src.match(/result-(\d+)/)?.[1]);const box=resultCropBoxes[number];return box?`<svg class="cropped-result-photo" viewBox="${box.join(' ')}" role="img" aria-label="${alt}"><image href="${src}" width="853" height="1280"/></svg>`:`<img src="${src}" alt="${alt}" loading="lazy">`;}
function storyCaption(entry){const number=Number(entry.src.match(/result-(\d+)/)?.[1]);return `<strong>${entry.alt}</strong>${resultStoryNotes[number]?`<span class="result-story-note">${resultStoryNotes[number]}</span>`:''}`;}
function fillGallery(id,entries){document.getElementById(id).innerHTML=entries.map((e,i)=>`<button type="button" data-gallery="${id}" data-index="${i}" aria-label="Увеличить: ${e.alt}">${e.images?`<span class="result-photo-set">${e.images.map((src,j)=>e.images.length>1?resultPhoto(src,`${e.alt}, ракурс ${j+1}`):`<img src="${src}" alt="${e.alt}" loading="lazy">`).join('')}</span><span class="result-set-caption">${e.images.length>1?storyCaption(e):e.alt}<small>${e.images.length>1?`${e.images.length} фото · открыть вместе`:'Открыть фото'}</small></span>`:`<img src="${e.src}" alt="${e.alt}" loading="lazy">`}</button>`).join('');}
fillGallery('results-track',resultEntries);fillGallery('reviews-track',reviewEntries);
document.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',()=>{const t=document.getElementById(b.dataset.scroll);t.scrollBy({left:Number(b.dataset.dir)*t.clientWidth*.8,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}));
const lightbox=document.getElementById('lightbox');let activeEntries=[],activeIndex=0;
function showImage(){const entry=activeEntries[activeIndex];const images=entry.images||[entry.src];const container=lightbox.querySelector('.lightbox-images');container.innerHTML=images.length>1?`<div class="result-modal-story"><div class="result-modal-photos">${images.map((src,i)=>resultPhoto(src,`${entry.alt}, ракурс ${i+1}`)).join('')}</div><div class="result-modal-caption">${storyCaption(entry)}</div></div>`:images.map(src=>`<img src="${src}" alt="${entry.alt}">`).join('');container.style.setProperty('--image-count',images.length);lightbox.classList.toggle('grouped-images',images.length>1);document.getElementById('lightbox-caption').textContent=`${activeIndex+1} / ${activeEntries.length}${images.length>1?'':' · '+entry.alt}`;}
function moveImage(step){activeIndex=(activeIndex+step+activeEntries.length)%activeEntries.length;showImage();}
document.querySelectorAll('[data-gallery]').forEach(b=>b.addEventListener('click',()=>{activeEntries=b.dataset.gallery==='results-track'?resultEntries:reviewEntries;activeIndex=Number(b.dataset.index);showImage();lightbox.showModal();document.body.classList.add('modal-open');}));
lightbox.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click',()=>moveImage(-1));
lightbox.querySelector('.lightbox-next').addEventListener('click',()=>moveImage(1));
lightbox.addEventListener('close',()=>document.body.classList.remove('modal-open'));
lightbox.addEventListener('keydown',e=>{if(e.key==='ArrowRight')moveImage(1);if(e.key==='ArrowLeft')moveImage(-1);});
lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});
const menu=document.querySelector('.menu-toggle');const navigation=document.querySelector('#navigation');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Открыть меню');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Открыть меню');}});
document.querySelectorAll('.choose-format').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#format').value=a.dataset.format;}));
document.querySelector('#join-form').addEventListener('submit',e=>{e.preventDefault();const msg=document.querySelector('#form-message');msg.hidden=false;msg.textContent='Это демонстрация формы. Данные не отправлены и не сохранены. Для связи сейчас можно написать Ольге в Telegram ниже.';});

// Questionnaire destination will be connected once supplied.
document.querySelector('.questionnaire-button').addEventListener('click',()=>{
  const status=document.querySelector('#questionnaire-status');
  status.hidden=false;
  status.textContent='Анкета скоро появится. Ссылка будет добавлена перед стартом программы.';
});

const educationDialog=document.querySelector('#education-dialog');
document.querySelector('.education-trigger').addEventListener('click',()=>{educationDialog.showModal();document.body.classList.add('modal-open');});
educationDialog.querySelector('.education-close').addEventListener('click',()=>educationDialog.close());
educationDialog.addEventListener('click',e=>{if(e.target===educationDialog)educationDialog.close();});
educationDialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));

document.querySelector('.contact-max-pending').addEventListener('click',()=>{
  const status=document.querySelector('.contact-max-status');
  status.hidden=false;
  status.textContent='Ссылка на личный Макс скоро появится. Сейчас можно написать в Telegram или ВКонтакте.';
});

const joinDialog=document.querySelector('#join-dialog');
document.querySelectorAll('[data-open-join]').forEach(button=>button.addEventListener('click',()=>joinDialog.showModal()));
joinDialog.querySelector('.join-dialog-close').addEventListener('click',()=>joinDialog.close());
joinDialog.addEventListener('click',event=>{if(event.target===joinDialog){const r=joinDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)joinDialog.close();}});
document.querySelectorAll('.choose-format').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();joinDialog.showModal();}));

document.querySelector('.mobile-reserve').addEventListener('click',()=>{navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Открыть меню');});
document.querySelector('.mobile-max-pending').addEventListener('click',()=>{const status=document.querySelector('.mobile-menu-status');status.hidden=false;status.textContent='Личная ссылка на Макс скоро появится. Пока можно написать в Telegram или ВКонтакте.';});

const mobileComparison=document.createElement('div');
mobileComparison.className='mobile-comparison';
mobileComparison.innerHTML=tariffSections.map((section,index)=>{
 const header=index===0?'<div class="mobile-tariff-header mobile-tariff-header-grouped"><h3>'+section.title+'</h3><span class="mobile-type-group">Группа</span><span class="mobile-type-personal">Личная работа</span>'+prices.map(p=>'<span class="tariff-heading '+p.css+'">'+(p.id==='optimal'?'Оптимум':p.name)+'</span>').join('')+'</div>':'<div class="mobile-tariff-header mobile-tariff-section-title"><h3>'+section.title+'</h3></div>';
 const rows=section.rows.map(row=>{
  let values=row.slice(1);
  if(row[0]==='Сопровождение') values=['4 нед','8 нед','8 нед'];
  if(row[0]==='Обратная связь')return '<div class="mobile-tariff-row"><div class="mobile-tariff-label">'+row[0]+'</div><div class="mobile-tariff-shared">Ежедневно</div></div>';
  if(row[0]==='Чат общения')values=['Группа','Лично','Лично'];
  if(row[0]==='Доступ к материалам')values=['6 мес','1 год','3 года'];
  if(row[0]==='Основные модули программы')values=['4<br>модуля','5<br>модулей','6<br>модулей'];
  if(row[0]==='Сборник жиросжигающих напитков')values=['Мини','Большой','Большой'];
  const compact=['Сопровождение','Доступ к материалам','Сборник жиросжигающих напитков'].includes(row[0]);
  return '<div class="mobile-tariff-row"><div class="mobile-tariff-label">'+row[0]+'</div>'+values.map(value=>'<div class="mobile-tariff-value'+(compact?' mobile-value-nowrap':'')+'">'+tariffCell(value)+'</div>').join('')+'</div>';
 }).join('');
 return '<section class="mobile-tariff-section">'+header+'<div class="mobile-tariff-body">'+rows+'</div></section>';
}).join('');
document.querySelector('#price-grid').prepend(mobileComparison);

const expertPhotoEntries=[...document.querySelectorAll('[data-expert-photo]')].map(button=>({src:button.querySelector('img').getAttribute('src'),alt:button.querySelector('.expert-photo-caption').textContent}));
document.querySelectorAll('[data-expert-photo]').forEach(button=>button.addEventListener('click',()=>{activeEntries=expertPhotoEntries;activeIndex=Number(button.dataset.expertPhoto);showImage();lightbox.showModal();document.body.classList.add('modal-open');}));

document.querySelector('.gift-image-open').addEventListener('click',()=>{activeEntries=[{src:'new-year-gifts.png',alt:'Подарки при записи на программу'}];activeIndex=0;showImage();lightbox.showModal();document.body.classList.add('modal-open');});

const reviewsTrack=document.querySelector('#reviews-track');
function updateReviewPosition(){const cards=[...reviewsTrack.children];if(!cards.length)return;const nearest=cards.reduce((best,card,index)=>Math.abs(card.getBoundingClientRect().left-reviewsTrack.getBoundingClientRect().left)<Math.abs(cards[best].getBoundingClientRect().left-reviewsTrack.getBoundingClientRect().left)?index:best,0);document.querySelector('#reviews-position').textContent=String(nearest+1).padStart(2,'0')+' / '+String(cards.length).padStart(2,'0');}
reviewsTrack.addEventListener('scroll',updateReviewPosition,{passive:true});updateReviewPosition();

const articleGiftsDialog=document.querySelector('#article-gifts-dialog');
document.querySelectorAll('.article-gift-open').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#gift-choice').value=button.dataset.gift;articleGiftsDialog.showModal();}));
document.querySelector('.article-gifts-close').addEventListener('click',()=>articleGiftsDialog.close());
articleGiftsDialog.addEventListener('click',event=>{if(event.target===articleGiftsDialog){const r=articleGiftsDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)articleGiftsDialog.close();}});
document.querySelector('#gift-destination').addEventListener('change',event=>{const field=document.querySelector('#gift-contact-field'),input=document.querySelector('#gift-contact');const options={max:['Ваш контакт в Макс','Телефон или ссылка на профиль','text'],telegram:['Ваш контакт в Телеграмм','@username или ссылка на профиль','text'],vk:['Ваш профиль ВКонтакте','Ссылка на профиль ВКонтакте','url'],email:['Ваша почта','name@example.ru','email']};const selected=options[event.target.value];field.hidden=!selected;input.required=Boolean(selected);input.value='';if(selected){document.querySelector('#gift-contact-label').textContent=selected[0];input.placeholder=selected[1];input.type=selected[2];}});
document.querySelector('#article-gifts-form').addEventListener('submit',event=>{event.preventDefault();const status=document.querySelector('#gift-form-status');status.hidden=false;status.textContent='Форма пока работает в демонстрационном режиме. Данные не отправлены. Автоматическая отправка статей ещё не подключена.';});

const consultationDialog=document.querySelector('#consultation-dialog');
document.querySelectorAll('[data-open-consultation]').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();consultationDialog.showModal();}));
consultationDialog.querySelector('.consultation-close').addEventListener('click',()=>consultationDialog.close());
consultationDialog.addEventListener('click',event=>{if(event.target===consultationDialog){const r=consultationDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)consultationDialog.close();}});
const consultationPhone=document.querySelector('#consultation-phone');
consultationPhone.addEventListener('input',()=>{let digits=consultationPhone.value.replace(/\D/g,'');if(digits.startsWith('7')||digits.startsWith('8'))digits=digits.slice(1);digits=digits.slice(0,10);let value=digits?'+7 ('+digits.slice(0,3):'';if(digits.length>=3)value+=') ';if(digits.length>3)value+=digits.slice(3,6);if(digits.length>6)value+='-'+digits.slice(6,8);if(digits.length>8)value+='-'+digits.slice(8,10);consultationPhone.value=value;});
document.querySelector('#consultation-form').addEventListener('submit',event=>{event.preventDefault();const status=document.querySelector('#consultation-status');status.hidden=false;status.textContent='Форма пока работает в демонстрационном режиме. Заявка не отправлена. Для записи напишите Ольге в мессенджер.';});
