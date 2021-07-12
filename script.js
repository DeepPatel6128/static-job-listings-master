const dataObj = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": false,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]
  toHTML(dataObj[0])

  const jobListing = document.querySelector('.job-listings')
  const filterField = document.querySelector('.filter-field')
  const filterList = document.querySelector('.filter-list')
  let filters = []
  //Render Data

  function getTags(tagName){
      return `
      <div class="filters">
          <div class="filter-name">${tagName}</div>
          <div class="remove-btn">
            <img src="./images/icon-remove.svg" alt="">
          </div>
        </div>
      `
  }

  function toHTML(dataObj){
      return `
      <div class="vacancy ${dataObj.id === 1 ? 'top' :''} ">
        
        <div class="main-content">
          <div class="logo"><img src="${dataObj.logo}" alt=""></div>
          <div class="main-content-text">

            <div class="company-name">
              <span class="company">${dataObj.company}</span>
              <span class="new ${!dataObj.new ? 'hide' :''} ">New!</span>
              <span class="featured ${!dataObj.featured ? 'hide' :''} ">Featured</span>
            </div>

            <div class="position">${dataObj.position}</div>

            <div class="about">
              <span class="day-ago">${dataObj.postedAt}</span>
              <span class="contract">${dataObj.contract}</span>
              <span class="location">${dataObj.location}</span>
            </div>
          </div>
        </div>

        <div class="categories">
          <div class="filter" data-role="${dataObj.role}">${dataObj.role}</div>
          <div class="filter" data-level="${dataObj.level}">${dataObj.level}</div>
          ${dataLanguagesToHTML(dataObj.languages)}
          ${dataToolsToHTML(dataObj.tools)}
      </div>
      </div>
      `
  }

  function dataLanguagesToHTML(arr){
      if(!arr){
          return ''
      }
      const convertLang = arr.map(lang=> `<div class="filter" data-languages="${lang}">${lang}</div>`).join(' ')
      return convertLang
  }
  function dataToolsToHTML(arr2){
    if(!arr2){
        return ''
    }
    const convertTool = arr2.map(tool=> `<div class="filter" data-tools="${tool}">${tool}</div>`).join(' ')
    return convertTool
}

// const joinStrings = dataObj.reduce((acc, current)=>{
//     return acc + toHTML(current)
// },' ')     THIS IS ONE WAY TO DO IT

// jobListing.innerHTML = joinStrings
function render(data){
  const html = data.map(toHTML).join('')
  jobListing.innerHTML = html
}
render(dataObj)

function checkData(arrayOfTags , arrData){
  let newData = arrData.filter(value =>{
    let arrfiltervalues = [value.role , value.level , ...value.languages||' ' , ...value.tools||' ']
    return arrayOfTags.every(item => arrfiltervalues.includes(item))
  })
  render(newData)
}

jobListing.addEventListener('click', e =>{
    const targetEl = e.target;
    if(targetEl.classList.contains('filter')){
        if(filters.includes(targetEl.innerText)) return;
        filterField.classList.remove('hide')
        filterList.insertAdjacentHTML('beforeend', getTags(targetEl.innerText))
        filters.push(targetEl.innerText)
        checkData(filters, dataObj)
      }
})

function removeFilter(value){
  filters = filters.filter(item => item !== value)
  if(filters.length<=0){
    filterField.classList.add('hide')
    render(dataObj)
  }
  checkData(filters, dataObj)
}

filterList.addEventListener('click', (e)=>{
  const removedFilter = e.target.parentElement.childNodes[1].innerText
  e.target.parentElement.classList.add('hide')
    removeFilter(removedFilter)
})

const clearButton = document.querySelector('.clear-btn')

clearButton.addEventListener('click', ()=>{
  filters = []
  filterList.innerHTML = ''
  filterField.classList.add('hide')
  render(dataObj)
})