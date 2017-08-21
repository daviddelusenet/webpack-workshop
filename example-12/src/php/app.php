<?php

error_reporting(E_ALL ^ E_DEPRECATED);

// web/index.php
require_once __DIR__.'/../../vendor/autoload.php';

// Mimoto classes
use Mimoto\Mimoto;

// Configure Mimoto
Mimoto::setValue('config', include(dirname(__FILE__).'/config.php'));
Mimoto::setValue('ProjectConfig.root',__DIR__ . '/../');
Mimoto::setValue('ProjectConfig.twigroot', 'src/userinterface/templates/');

// Init app
$app = new Silex\Application();

// Setup Twig
$loader = new \Twig_Loader_Filesystem([Mimoto::value('ProjectConfig.root').Mimoto::value('ProjectConfig.twigroot')]);
$twig = new Twig_Environment($loader, array(
    'autoescape' => false,
    'debug' => true
));
$twig->addExtension(new Twig_Extension_Debug());

// Connect to Mimoto
Mimoto::setService('database', new PDO("mysql:host=".Mimoto::value('config')->mysql->host.";dbname=".Mimoto::value('config')->mysql->dbname, Mimoto::value('config')->mysql->username, Mimoto::value('config')->mysql->password));
Mimoto::setService('twig', $twig);

// Setup app
$app['debug'] = true;
$app['twig'] = $twig;
$app['Mimoto'] = new \Mimoto\Mimoto($app, false);

// Run Mimoto in debug mode
Mimoto::runInDebugMode(true);

function output($sTitle, $data)
{
    echo '<div style="background-color:#f5f5f5;border:solid 1px #858585;padding:20px">';
    echo '<h2><b style="color:#06afea">'.$sTitle.'</b></h2><hr>';
    echo '<pre style="width:100%">';
    print_r($data);
    echo '</pre>';
    echo '</div>';
    echo '<br>';
}

function error($data, $bDumpVar = false)
{
    echo '<div style="background-color:#f3f3f3;border:solid 1px #cccccc;padding:0 20px 20px 20px">';
    echo '<div style="display:inline-block;position:relative;">';
    echo '<h2><b style="color:#ff66cc;padding:0 20px 0 0;">Error</b></h2><hr>';
    echo '<pre style="width:100%">';
    ($bDumpVar) ? var_dump($data) : print_r($data);
    echo '</pre>';
    echo '</div>';
    echo '<br>';
    die();
}
