<?php

$app->get('/', 'Boilerplate\\Controllers\\HomeController::viewHome');
$app->get('/component-a', 'Boilerplate\\Controllers\\ComponentAController::viewComponentA');
$app->get('/component-b', 'Boilerplate\\Controllers\\ComponentBController::viewComponentB');
