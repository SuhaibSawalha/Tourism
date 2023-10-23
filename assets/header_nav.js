/*Set the header of every page*/
document.querySelector("header").innerHTML = `
    <div class="navbar-background"></div>
    <div class="navbar-stop"></div>
    <nav class="navbar navbar-expand-lg right-0 position-fixed p-3">
    <a class="navbar-brand" href="#">
        <img 
            title="السياحة في فلسطين"
            alt="السياحة في فلسطين"
            src="./assets/img/favicon.png" 
        />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse-suhaib" id="navbarContent">
        <ul class="navbar-nav flex-column">
        <li class="nav-item">
            <a href="#">
            <img
                src="./assets/img/Navbar icons/home.png"
                title="السياحة في فلسطين"
                alt="السياحة في فلسطين"
                width="40"
                height="40"
            />
            </a>
            <div><a href="#">الرئيسية</a></div>
        </li>
        <li class="nav-item">
            <a href="#cities">
            <img
                src="./assets/img/Navbar icons/cities.png"
                alt="المدن"
                title="المدن"
                width="35"
                height="35"
            />
            </a>
            <div><a href="#cities">المدن</a></div>
        </li>
        <li class="nav-item">
            <a href="#quds">
            <img
                src="./assets/img/Navbar icons/quds.png"
                alt="القدس"
                title="القدس"
                width="40"
                height="40"
            />
            </a>
            <div><a href="#quds">القدس</a></div>
        </li>
        <li class="nav-item">
            <a href="#map">
            <img
                src="./assets/img/Navbar icons/palestine.png"
                alt="فلسطين"
                title="فلسطين"
                width="50"
                height="50"
            />
            </a>
            <div><a href="#map">فلسطين</a></div>
        </li>
        <li class="nav-item">
            <a href="#places">
            <img
                src="./assets/img/Navbar icons/places.png"
                alt="السياحة"
                title="السياحة"
                width="35"
                height="35"
            />
            </a>
            <div><a href="#places">السياحة</a></div>
        </li>
        <li class="nav-item">
            <a href="#trips">
            <img
                src="./assets/img/Navbar icons/trips.png"
                alt="الرحلات"
                title="الرحلات"
                width="40"
                height="40"
            />
            </a>
            <div><a href="#trips">الرحلات</a></div>
        </li>
        <li class="nav-item">
            <a href="#contact">
            <img
                src="./assets/img/Navbar icons/contact.png"
                alt="التواصل"
                title="التواصل"
                width="35"
                height="35"
            />
            </a>
            <div><a href="#contact">التواصل</a></div>
        </li>
        </ul>
    </div>
    </nav>
`;

/*Set the footer of every page*/
document.querySelector("footer").innerHTML = `
    <div class="d-flex mt-5">
    <h3 class="ms-2">السياحة في فلسطين</h3>
    <img
        src="./assets/img/favicon.png"
        title="السياحة في فلسطين"
        alt="السياحة في فلسطين"
        width="35"
        height="35"
    />
    </div>
    <p class="mb-0 mt-2">
    رحلاتنا موثوقة ومأمنة ومرخصة من وزارة السياحة الفلسطينية
    </p>
    <p class="mb-1">بإمكانك الاستسفار من زبائننا السابقين</p>
    <div>
    <i class="bi bi-telegram"></i>
    <i class="bi bi-twitter"></i>
    <i class="bi bi-linkedin"></i>
    <i class="bi bi-instagram"></i>
    <i class="bi bi-facebook"></i>
    </div>
    <div class="d-flex mt-5 align-items-center">
    <h6 class="mb-0">جميع الحقوق محفوظة لصهيب صوالحه 2023</h6>
    <i class="bi bi-c-circle"></i>
    </div>
    <div class="d-flex mt-3 align-items-center mb-5">
    <h6 class="mb-0">جميع حقوق التصميم محفوظة لقتيبة عليان 2023</h6>
    <i class="bi bi-c-circle"></i>
    </div>
`;
