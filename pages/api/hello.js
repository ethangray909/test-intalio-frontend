// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const base_url = "https://localhost:7220/api/Department/"

export function getAllDepartments() {
  return new Promise((resolve, reject) => {
    fetch(base_url).then(res => {
      res.json().then(response => {
        resolve(response);
      }).catch(er => {
        console.log("JSON Parse Error");
      })
    }).catch(err => {

    })

  })
}

export function searchDepartments(searchString) {
  let endpoint = "searchDepartment?departmentName=" + searchString
  return new Promise((resolve, reject) => {
    fetch(base_url + endpoint).then(res => {
      res.json().then(response => {
        resolve(response);
      }).catch(er => {
        console.log("JSON Parse Error");
      })
    }).catch(err => {

    })

  })
}

export function getRootDepartments() {
  let endpoint = "getRootDepartments"
  return new Promise((resolve, reject) => {
    fetch(base_url + endpoint).then(res => {
      res.json().then(response => {
        resolve(response);
      }).catch(er => {
        console.log("JSON Parse Error");
      })
    }).catch(err => {

    })

  })
}

export function getChildDepartments(parentId) {
  let endpoint = "getChildDepartments?parentId="+parentId
  return new Promise((resolve, reject) => {
    fetch(base_url + endpoint).then(res => {
      res.json().then(response => {
        resolve(response);
      }).catch(er => {
        console.log("JSON Parse Error");
      })
    }).catch(err => {

    })

  })
}
