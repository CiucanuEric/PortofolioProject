const Test= document.getElementById("romanian_language_button")
const gitHub= document.getElementById("github_projects")

Test.addEventListener("click",getRepos)

function formatRepoDiv(Repo)
{
    let formatedRepo =
        "<div class='repo'>" +
            "<div class='repo_name'>" + Repo.name + "</div>" +
            "<div class='repo_link'><a href='" + Repo.clone_url +"'><u>LINK</u></a></div>"
        "</div>"
    return formatedRepo
}
async function getRepos()
{
    let url ="https://api.github.com/search/repositories?q=user:ItzRickyFTW"
    let response = await fetch(url)
    let result = await response.json()

    return result.items
}
async function displayRepos()
{
    let JSONrepos = await getRepos()
    console.log(JSONrepos[1])
    for(let i = 0; i<JSONrepos.length; i++)
    {
        gitHub.innerHTML+=formatRepoDiv(JSONrepos[i])
    }
}