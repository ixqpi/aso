// عند الضغط على زر تسجيل الدخول، يتم استدعاء الدالة login()
document.getElementById('login-btn').addEventListener('click', function() {
    login();
});

// دالة التحقق من تسجيل الدخول
function login() {
    const username = document.getElementById('username').value; // قراءة اسم المستخدم
    const password = document.getElementById('password').value; // قراءة كلمة المرور

    // بيانات تسجيل الدخول الصحيحة
    const correctUsername = 'ixqpi';
    const correctPassword = 'ssa12';

    // عنصر لعرض رسالة الخطأ
    const errorMessage = document.getElementById('error-message');

    // التحقق من صحة البيانات
    if (username === correctUsername && password === correctPassword) {
        // إذا كانت البيانات صحيحة، الانتقال إلى الصفحة الرئيسية
        window.location.href = 'main.html';
    } else {
        // إذا كانت البيانات غير صحيحة، عرض رسالة خطأ
        errorMessage.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة!';
    }
}
  
function showHome() {
    document.getElementById("main-content").innerHTML = `
        <div class="post">
            <img src="images/sample-post.png" alt="Post Image">
            <p>Home: Sample post content here.</p>
        </div>`;
}




// Function to show Search section
function showSearch() {
    document.getElementById("main-content").innerHTML = `
        <div class="search">
            <h2>Search Section</h2>
            <p>Here you can search for content.</p>
        </div>`;
}

// Function to show Add Post section
function showAddPost() {
    document.getElementById("main-content").innerHTML = `
        <div class="add-post">
            <h2>Add Post</h2>
            <p>This is where you can add a new post.</p>
        </div>`;
}

// Function to show reels section
function reels() {
    document.getElementById("main-content").innerHTML = `
        <div class="reels">
            <h2>reels</h2>
            <p>You have no new reels.</p>
        </div>`;
}

// Function to show Profile section
function showProfile() {
    document.getElementById("main-content").innerHTML = `
        <div class="profile">
            <h2>Your Profile</h2>
            <p>This is your profile page.</p>
        </div>`;
}