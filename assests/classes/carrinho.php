<div class="client">
    <?php
        session_start();

        if (!isset($_SESSION['carrinho'])) {
            $_SESSION['carrinho'] = array();
        }

        echo "<h1>Carrinho de Compras</h1>";

        if (empty($_SESSION['carrinho'])) {
            echo "<p>O carrinho está vazio.</p>";
        } else {
            echo "<ul>";
            foreach ($_SESSION['carrinho'] as $produto) {
                echo "<li>$produto</li>";
            }
            echo "</ul>";
        }
    ?>
</div>