<?php include 'includes/header.php'; ?>
<h1>Pevné disky a SSD</h1>
<div class="grid-container-text">
    <div class="text">
        <p><b>Pevný disk</b> se skládá z několika tvrdých ploten s keramickým nebo skleněným základem, který je po obou stranách pokryt magnetickou vrstvou. Data, která se zapisují na pevný disk, se ukládají právě do této vrstvy. Většina pevných disků se skládá ze dvou až šesti ploten připojených k centrální ose, která jimi otáčí. Mezi plotnami se pohybuje soustava čtecích a záznamových hlav, jejichž prostřednictvím se data načítají a ukládají.Hlavy se  vznášejí na vzduchovém polštáři.
        </p><br>
        <p><b>Záznamové hlavy</b> vytvářejí zmagnetizované oblasti, které mohou být čtecími hlavami vyhodnoceny jako jednotky informace. Celý systém se skládá z více ploten, zpravidla oboustranných. Data se na jednotlivé plotny zapisují v soustředných kruzích, tzv. stopách. Čtecí hlava tak může přečíst obsah celé stopy, aniž by musela měnit polohu čtecí hlavy.
        </p><br>
        <p><b>Stopy</b> jsou rozděleny do několika set sektorů. Sektory obsahují určité značky, s jejichž pomocí rozpoznávají hlavy, kde začít se čtením potřebných dat. Stopa na okraji disku je delší než vnitřní stopa. Dříve byl počet sektorů na všech stopách stejný. Dnes je využití místa na disku dokonalejší a na vnějších stopách je sektorů více. Růst počtu bitů však není lineární, ale stupňovitý. Stopy na pevném disku jsou sdruženy do takzvaných cylindrů.
        </p><br>
        <p><b>Cylindr</b> tvoří všechny stopy, které zaujímají na jednotlivých plotnách vertikálně stejnou polohu. Cylindry slouží k tomu, aby se urychlilo načítání velkých objemů dat.
        </p><br>
        <p><b>Cluster</b> je skupina sektorů, respektive vyjádření jejich poloh v tabulce FAT. Dostane-li pevný disk pokyn k vyhledání daného souboru, podívá se nejprve do tabulky FAT, kde zjistí jeho polohu. Poté mikroprocesor nasměruje čtecí hlavu k danému místu.
        Protože vzdálenost hlav od plotny je velmi malá, jsou disky velice choulostivé na jakékoliv nečistoty. Proto je mechanická část disku prachotěsně uzavřená, většinou v hliníkovém pouzdře.
        </p><br>
        <p><b><u>SSD disky (Solid State Drive)</u></b> neobsahují na rozdíl od tradičních harddisků žádné pohyblivé díly. Místo rotujících ploten s magnetickou polevou obsahují paměťové čipy, do kterých lze zapisovat data a opětovně je mazat. V principu jde o technologii poměrně starou, k vidění byla už u počítačů v 80. letech, ale v poslední době se začaly vyrábět paměti tak rychlé a s takovou kapacitou, že v mnoha směrech tradiční harddisky překonaly.
        </p><br>
        <p>Základní a nejdůležitější výhodou SSD disků je jejich rychlost. Moderní SSD disky umí zapisovat i číst rychlostmi nad 500 MB/s. Jde ale o maximální rychlost, kterou lze dosáhnout při čtení a zápisu velkých souborů. V praxi se běžně dosahuje rychlostí kolem 250-300 MB/s, při práci s malými soubory může poklesnout až na zhruba 50 MB/s. Ve srovnání s klasickým harddiskem je to ale stále hodně, ty mají maximum kolem 150 MB/s a při práci s malými soubory poklesne rychlost i na 2 MB/s! V praxi je tak po nasazení SSD disku možné pozorovat opravdu razantní zrychlení systému, ať už při startu Windows a nebo při práci s aplikacemi.
        </p><br>
        <p><b>SSD vs HDD</b><br>Vysoká rychlost není jedinou výhodou. Protože SSD disk neobsahuje pohyblivé části, nehrozí jeho poškození při manipulaci za provozu. Proto se SSD disky různých typů používají ve všech smartphonech, tabletech a také většině ultrabooků. Rovněž nehrozí poškození informací magnetickým polem. SSD disky také konzumují výrazně méně energie, pouze 2 až 4 watty za intenzivního provozu a pouze kolem 0,5 wattu, když je disk v klidu. Díky nízké spotřebě je SSD disk rovněž chladný.
        </p>
    </div>
    <div class="picture">
        <img src="pictures/hdd1.png" alt="HDD">
        <img src="pictures/hdd2.png" alt="HDD">
        <img src="pictures/hdd3.png" alt="HDD">
        <img src="pictures/ssd.png" alt="SSD">
    </div>
</div>
<?php include 'includes/footer.php'; ?>

<body>

    </html>