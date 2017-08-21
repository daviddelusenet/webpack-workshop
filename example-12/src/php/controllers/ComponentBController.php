<?php

// classpath
namespace Boilerplate\Controllers;

// Mimoto classes
use Mimoto\Mimoto;
use Mimoto\Core\CoreConfig;

// Silex classes
use Silex\Application;


/**
 * HomeController
 *
 *
 */
class ComponentBController
{
    /**
     * View page "Home"
     * @param Application $app
     * @return mixed
     */
    public function viewComponentB(Application $app)
    {
        return $app['twig']->render('pages/home.twig');
    }

}
