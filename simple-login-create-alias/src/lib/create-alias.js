/**
 * @param {string} alias
 */
export function postSimpleLogin(alias){
    getSignedSuffix().then(suffix => {
        callCreation(alias, suffix).then(result =>  {
            console.log(result);
        })
    });
}

async function getSignedSuffix(){    
    return fetch("https://app.simplelogin.io/api/v5/alias/options", { 
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authentication": "<GET FROM 1P>",
              }
        })
        .then(response => response.text())
        .then(result => {
            var data = JSON.parse(result);
            for (var i = 0; i < data.suffixes.length; i++) {
                if (data.suffixes[i].suffix == "@november42.com") {
                    return data.suffixes[i].signed_suffix;
                }
            }      
        })
        .catch(error => console.log('error', error));
}

/**
 * @param {string} alias
 * @param {string} suffix
 */
async function callCreation(alias, suffix){
    var raw = JSON.stringify({
        "alias_prefix": alias,
        "signed_suffix": suffix,
        "mailbox_ids": [
          "428007"
        ]
      });
    return fetch("https://app.simplelogin.io/api/v3/alias/custom/new", { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authentication": "<GET FROM 1P>",
        },
        body: raw
    })
    .then(response => {return response.text()})
}