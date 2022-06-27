<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{env('APP_NAME')}}</title>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="bg-amber-100 font-serif leading-relaxed">
    APP ENVIRONMENT: {{ App::environment() }}
    <div id="app">
        <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center py-4 sm:pt-0">
            <root-app/>
        </div>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>