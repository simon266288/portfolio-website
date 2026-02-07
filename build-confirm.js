#!/usr/bin/env node

const { spawn } = require('child_process');
const readline = require('readline');

// 创建 readline 接口用于交互
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 询问用户是否确认构建
rl.question('⚠️  即将构建项目，是否继续？(y/n): ', (answer) => {
  const confirmed = answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes';

  if (confirmed) {
    console.log('\n🔨 开始构建...\n');

    // 运行实际构建命令
    const buildProcess = spawn('npm', ['run', 'build'], {
      stdio: 'inherit',
      shell: true
    });

    buildProcess.on('close', (code) => {
      rl.close();
      process.exit(code);
    });
  } else {
    console.log('\n❌ 构建已取消');
    rl.close();
    process.exit(0);
  }
});
