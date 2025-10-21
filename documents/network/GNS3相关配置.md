# GNS3 - win11家庭版在VMware里启动GNS3虚拟机时报错问题

> 启动时报错：此平台不支持虚拟化的 Intel VT-x/EPT。 不使用虚拟化的 Intel VT-x/EPT，是否继续? 
>
> 然后陷入无限循环，不能正常启动GNS3虚拟机，并在上面跑路由器

1. 任务管理器 - 性能 - CPU查看虚拟化是否已启用，如果不，那需要进去BIOS然后启用VT-x
2. VMware workstation对于GNS3这个虚拟机的配置和管理，需要勾选☑ 虚拟化 Intel VT-x/EPT 或 AMD-V/RVI
3. 禁用Hyper-v相关
   1. 打开"控制面板" > "程序" > "启用或关闭 Windows 功能"。
   2. 取消勾选以下选项：
      - Hyper-V
      - Windows 虚拟机监控程序平台
      - 虚拟机平台
   3. 点击"确定"，然后重启计算机。

我到这一步就可以用了，如果还是不行，后续操作：

1. 使用命令行禁用 Hyper-V：
   1. 以管理员身份打开 PowerShell 或命令提示符。
   2. 执行以下命令：
   3. powershell
   4. 复制代码
   5. `bcdedit /set hypervisorlaunchtype off`
   6. 重启计算机。
2. 禁用内核隔离：
   1. 打开"设置" > "隐私与安全" > "Windows 安全" > "设备安全性"。
   2. 在"内核隔离"部分，点击"内核隔离详细信息"。
   3. 关闭"内存完整性"选项。
   4. 重启计算机。

