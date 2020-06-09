<html class="no-js h-100" lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Blog Expert</title>
        <meta name="description" content="A high-quality & free Bootstrap admin dashboard template pack that comes with lots of templates and components.">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" id="main-stylesheet" data-version="1.1.0" href="{{ asset('css/shards-dashboards.1.1.0.min.css') }}">
        <link rel="stylesheet" href="{{ asset('css/extras.1.1.0.min.css') }}">
    </head>
    <body class="h-100">
        <div class="container-fluid">
            <div class="row">
                <!-- Main Sidebar -->
                <aside class="main-sidebar col-12 col-md-3 col-lg-2 px-0">
                    <div class="main-navbar">
                        <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                            <a class="navbar-brand w-100 mr-0" href="/home" style="line-height: 25px;">
                                <div class="d-table m-auto">
                                    <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px;" src="{{ asset('images/shards-dashboards-logo.svg') }}" alt="Shards Dashboard">
                                    <span class="d-none d-md-inline ml-1">Dashboard</span>
                                </div>
                            </a>
                            <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                            <i class="material-icons"></i>
                            </a>
                        </nav>
                    </div>
                    <div class="nav-wrapper">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link " href="{{ route('member') }}">
                                <i class="material-icons">vertical_split</i>
                                <span>Member</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <!-- End Main Sidebar -->
                <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                    <div class="main-navbar sticky-top bg-white">
                        <!-- Main Navbar -->
                        <nav class="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                            <form action="#" class="w-100">
                                <h4 class="text-center welcome" style="margin: 10px;
                                    font-size: 25px;">Welcome to Dashboard
                                </h4>
                            </form>
                            <ul class="navbar-nav border-left flex-row ">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                    <img class="user-avatar rounded-circle mr-2" src="{{ asset('images/avatars/0.jpg') }}" alt="User Avatar">
                                    <span class="d-none d-md-inline-block">
                                        @if(auth()->check())
                                        {{ Auth::User()->name }}
                                        @endif
                                    </span>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-small">
                                        @if(auth()->check())
                                        <a class="dropdown-item" href=" {{ route('view/Profile', [Auth::User()->id]) }}">
                                            @endif
                                        <i class="material-icons"></i> Profile</a>
                                        <a class="dropdown-item" href="{{ route('posts') }}">
                                        <i class="material-icons">vertical_split</i> Blog Posts</a>
                                        <a class="dropdown-item" href="{{ route('posts/create') }}">
                                        <i class="material-icons">note_add</i> Add New Post</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item text-danger" href="{{ route('logout') }}">
                                        <i class="material-icons text-danger"></i> Logout </a>
                                    </div>
                                </li>
                            </ul>
                            <nav class="nav">
                                <a href="#" class="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
                                <i class="material-icons"></i>
                                </a>
                            </nav>
                        </nav>
                    </div>
                    <div class="main-content-container container-fluid px-4">
                        @yield('content')
                    </div>
                </main>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
        <script src="https://unpkg.com/shards-ui@latest/dist/js/shards.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Sharrre/2.0.1/jquery.sharrre.min.js"></script>
        <script src="{{ asset('js/extras.1.1.0.min.js') }}"></script>
        <script src="{{ asset('js/shards-dashboards.1.1.0.min.js') }}"></script>
        <script src="{{ asset('js/app/app-blog-overview.1.1.0.js') }}"></script>
        @yield('script')
    </body>
</html>