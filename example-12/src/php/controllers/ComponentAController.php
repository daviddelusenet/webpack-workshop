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
class ComponentAController
{
    /**
     * View page "Home"
     * @param Application $app
     * @return mixed
     */
    public function viewComponentA(Application $app)
    {
        return $app['twig']->render('pages/componentA.twig');
    }

}
