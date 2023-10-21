document.querySelector("header").innerHTML = `
    <nav class="navbar navbar-expand-md flex-column top-0 right-0 position-fixed p-3">
        <a clas="navbar-brand" href="#">
            <img src="./img/favicon.png" width="50" height="50"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#">
                        <i class="bi bi-house"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
`;
