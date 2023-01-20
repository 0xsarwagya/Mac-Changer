const { execSync } = require('child_process');
const arg = require('arg');

function changeMac(interface, newMac) {
    console.log(`[+] Changing MAC for interface ${interface} to ${newMac}`);

    execSync(`ifconfig ${interface} down`);
    execSync(`ifconfig ${interface} hw ether ${newMac}`);
    execSync(`ifconfig ${interface} up`);
}

const args = arg({
    '--interface': String,
    '--mac': String
});

if (!args['--interface']) {
    console.error('[-] Please specify interface, use --help for usage');
    process.exit(1);
} else if (!args['--mac']) {
    console.error('[-] Please specify MAC , use --help for usage');
    process.exit(1);
}

changeMac(args['--interface'], args['--mac']);
