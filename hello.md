# tab 没有补全

https://blog.csdn.net/tmosk/article/details/77523576

```text
# enable bash completion in interactive shells  
#if ! shopt -oq posix; then  
# if [ -f /usr/share/bash-completion/bash_completion ]; then  
#    . /usr/share/bash-completion/bash_completion  
#  elif [ -f /etc/bash_completion ]; then  
#    . /etc/bash_completion  
#  fi  
#fi 
```
```bash
sudo gedit /etc/bash.bashrc
source /etc/bash.bashrc
```


# 快捷键
设置>设备>键盘 (最后 有一个 + 号 添加)


#　截图工具　flameshot
把　命令　添加到　快捷键
flameshot gui

# 桌面便签

```bash
sudo add-apt-repository ppa:umang/indicator-stickynotes
sudo apt-get update 
sudo apt-get install indicator-stickynotes 
```
**添加源失败，查看是否有软件源错误，在全部应用找到 软件与更新 把相应错误源删除 再重加载即可**

# 绿色版图标(启动器)
link : https://blog.csdn.net/sbqakqux/article/details/37761885
桌面图标位置
/usr/share/applications
在其他目录建立
mkdir ~/other
cd ~/other
touch android-studio.desktop
gedit android-studio.desktop
```text
[Desktop Entry]
Name=android-studio
Comment=android-studio from your desktop
Exec=/home/lhz/development/android-studio/bin/studio.sh
Icon=/home/lhz/development/android-studio/bin/studio.png
Terminal=false
Type=Application
Categories=Development;
```

```bash
# 验证
desktop-file-validate android-studio.desktop
# 安装
desktop-file-install android-studio.desktop
```

# 常用快捷键

super + 1 2 3   切换应用
按super 键 可拖动应用至工作区 组成 一组工作区应用
切换应用时 可以同时显示 同组应用
ctrl + Alt + T 打开控制台
Ctrl + Shitf + C/V 可在控制台 复制/粘贴

# 网速 slurm
sudo apt-get install slurm  (Ubuntu系统)查看网速命令
slurm -i eth0  (etho为网卡名)
ifconfig 查看网卡

# 数据库管理工具 DBeaver

# 用户

useradd www
password www -> password

# 修改 HOST

sudo gedit /etc/hosts

# screen 
link: https://www.ibm.com/developerworks/cn/linux/l-cn-screen/index.html
screen -S name // 新建会话 起个名字
screen -r name // 切换到指定会话
每个回话可以有多个 窗口
## 在screen模式的命令
 Ctrl-A + d 暂时断开screen会话
C-a ?	显示所有键绑定信息
C-a w	显示所有窗口列表
C-a C-a	切换到之前显示的窗口
C-a c	创建一个新的运行shell的窗口并切换到该窗口
C-a n	切换到下一个窗口
C-a p	切换到前一个窗口(与C-a n相对)
C-a 0..9	切换到窗口0..9
C-a a	发送 C-a到当前窗口
C-a d	暂时断开screen会话
C-a k	杀掉当前回话
C-a [	进入拷贝/回滚模式

## alias 指令 别名

alias clearr="printf '\033c'"

## 安装使用wps
安装包
https://www.wps.cn/product/wpslinux/#
字体
https://blog.csdn.net/jiangshangchunjiezi/article/details/79942118

## wget 下载目录
wget -c -r -np -k -L -p http://192.168.2.219/.git/

## nmap 端口扫描
nmap -Pn --script vuln dandingkeji.top

# 内网穿透

# 梯子

# 生成目录书结构
https://blog.csdn.net/feifei159/article/details/68488693
tree -L 3 -I "node_modules"
# 新建用户
sudo useradd -r -m -s /bin/bash www
passwd  user
# 挂载磁盘&磁盘空间
link: https://zhuanlan.zhihu.com/p/35774442
https://www.digitalocean.com/docs/volumes/how-to/unmount/
```bash
# 查看磁盘
sudo fdisk -l 
sudo blkid # 各种信息  type label uuid 

sudo df -lh # 查看磁盘挂载信息,与剩余空间
sudo du -lh --max-depth=1 ./  # 文件/文件夹 大小

ls -l /dev/disk/by-uuid # 获取硬盘(设备)的 uuid
ls -l /dev/disk/by-label

sudo mount /dev/sdb1 ~/data  # 临时挂载
sudo umount /dev/sdb1 ~/data  # 卸载磁盘
sudo lsof +f -- /dev/sdb1 # 查看磁盘占用
# 开机自动挂载
sudo cp /etc/fstab /etc/fstab.bak # 备份一下吧
vim /etc/fstab
UUID=ea195de6-725c-4701-98c3-1fa6a44bc102 /home/speculatecat/data ext4 defaults 0 0
UUID=52D4F923D4F909CD /code ntfs defaults 0 0
UUID=124A299C4A297E1B /soft ntfs defaults 0 0
UUID=3632F31E32F2E233 /play ntfs defaults 0 0
UUID=1CC22D8CC22D6B6A /data ntfs defaults 0 0
```

# 网络
```bash
# 端口使用情况
sudo lsof -i:3306 
```

# 交换空间 swap

LINK: https://blog.csdn.net/u010429286/article/details/79219230

1. 查看交换空间
```bash
 sudo swapon --show
 free -h
```
2. 创建swap文件
```bash
sudo fallocate -l 1G /swapfile # 创建文件
sudo chmod 600 /swapfile # 修改权限
ls -lh /swapfile # 查看
sudo mkswap /swapfile # 标记为交换空间
sudo swapon /swapfile # 启用
```
3. 永久保留

之前的修改都是临时的，改为永久的

```bash
sudo cp /etc/fstab /etc/fstab.bak # 备份一下
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab # 写入文件末尾

```

## 交换属性 swappiness
swappiness参数配置您的系统将数据从RAM交换到交换空间的频率, 值介于0和100之间
系统默认： 60


```bash
cat /proc/sys/vm/swappiness ## 查看数值

```
