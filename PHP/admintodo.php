<html>
    <head>
        <title>Dashboard</title>
        <link rel="stylesheet" type="text/css" media="screen" href="admin.php"> 
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"  />
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/css/toastr.css" rel="stylesheet"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/js/toastr.js"></script>
    </head>
    <body>
        <section id="header">
            <div class="dash-left">
                <a href="#" class="logo">HELLO...</a>
                <div class="nav">
                    <h5>NAVIGATION</h5>
                </div>
                <br><br><br>

                <div class="dash_data">
                    <span class="house-icon"><i class="fa-solid fa-house"></i></span>
                    <a href="index.php" id="dashtitle">Dashboard</a>
                </div>
    
                <div class="dash_data">
                    <span class="task-icon"><i class="fa-solid fa-bars-progress"></i></span>
                    <a href="addtodo.php" id="dashtitle">Task</a>
                </div>
                <div class="dash_data">
                    <span class="list-icon"><i class="fa-solid fa-list-check"></i></span>
                    <a href="listtodo.php" id="dashtitle">List</a>
                </div>
                <div>
                    <h3 class="header3">Todo</h3>
                    <!-- <a href="employee.php" id="employee">Employee</a> -->
                    <a href="admintodo.php?page=1" id="admin">Employee</a>
                </div>
            </div>
            
            
            <div class="dash-right">
                <div id="left-header">
                    <span class="bars"><i class="fa-solid fa-bars"></i></span>
                    <input type="search" placeholder="Search..." class="search">
                    <button class="btn">Search</button>
                </div>

                <div class="icons">
                <span><i class="fa-solid fa-bell"></i></span>
                <span><i class="fa-solid fa-gear"></i></span>
                <span><i class="fa-solid fa-moon"></i></span>
               <span><i class="fa-solid fa-expand"></i></span>
               <span><i class="fa-solid fa-retweet"></i></span>
            </div>

            <div class="profile">
                <div class="left_profile">
                    <i class="fa-solid fa-user-tie"></i>
                </div>
                <div class="right_profile">
                    <h3 class="h3">RAGUL M</h3>
                    <h4 class="h4"> Founder</h4>
                </div>
            </div>
            <table>
                <tbody>
                    <h1 class="task-list">Task List</h1>
                    <a  href="employee.php" class="btn2">Add employee</a>

                    <?php
                        $page = $_GET['page'];
                        echo $page;
                    ?>

                    <div class="table">
                    <tr>
                        <th>No.</td>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>

                    <!-- <tr>
                        <td></td>
                        <td><button class="btn3">Edit</button></td>
                        <td><button class="btn4">Deleted</button></td>
                        <td></td>
                        
                    </tr> -->
                    
                </div>
                </tbody>

                <?php require_once "dbemplist.php"; ?>

            </table>

            <div class="page-num">
                <a href="#" class="pages">&laquo;</a>
                <a href="admintodo.php?page=1" class="pages <?php echo ($page == 1) ? 'active':''; ?>">1</a>
                <a href="admintodo.php?page=2" class="pages <?php echo ($page == 2) ? 'active':''; ?>">2</a>
                <a href="admintodo.php?page=3" class="pages <?php echo ($page == 3) ? 'active':''; ?>">3</a>
                <a href="admintodo.php?page=4" class="pages <?php echo ($page == 4) ? 'active':''; ?>">4</a>
                <a href="admintodo.php?page=5" class="pages <?php echo ($page == 5) ? 'active':''; ?>">5</a>
                <a href="#" class="pages">&raquo;</a>

            </div>


        </section>   
    </body>
</html>

<script>
    function popup(){
    toastr.info('Deleted Successful....');
    }
</script>