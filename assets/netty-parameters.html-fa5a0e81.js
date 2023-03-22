import{_ as e,W as l,X as t,a1 as i}from"./framework-b468b75a.js";const n={},_=i("<ul><li><p>MAX_MESSAGES_PER_READ Netty参数，一次Loop读取的最大消息数，对于ServerChannel或者NioByteChannel，默认值为16，其他Channel默认值为1。默认值这样设置，是因为：ServerChannel需要接受足够多的连接，保证大吞吐量，NioByteChannel可以减少不必要的系统调用select。</p></li><li><p>RCVBUF_ALLOCATOR Netty参数，用于Channel分配接受Buffer的分配器，默认值为AdaptiveRecvByteBufAllocator.DEFAULT，是一个自适应的接受缓冲区分配器，能根据接受到的数据自动调节大小。可选值为FixedRecvByteBufAllocator，固定大小的接受缓冲区分配器。</p></li><li><p>WRITE_BUFFER_HIGH_WATER_MARK Netty参数，写高水位标记，默认值64KB。如果Netty的写缓冲区中的字节超过该值，Channel的isWritable()返回False。</p></li><li><p>WRITE_BUFFER_LOW_WATER_MARK Netty参数，写低水位标记，默认值32KB。当Netty的写缓冲区中的字节超过高水位之后若下降到低水位，则Channel的isWritable()返回True。写高低水位标记使用户可以控制写入数据速度，从而实现流量控制。推荐做法是：每次调用channl.write(msg)方法首先调用channel.isWritable()判断是否可写。</p></li><li><p>MESSAGE_SIZE_ESTIMATOR Netty参数，消息大小估算器，默认为DefaultMessageSizeEstimator.DEFAULT。估算ByteBuf、ByteBufHolder和FileRegion的大小，其中ByteBuf和ByteBufHolder为实际大小，FileRegion估算值为0。该值估算的字节数在计算水位时使用，FileRegion为0可知FileRegion不影响高低水位。</p></li><li><p>SINGLE_EVENTEXECUTOR_PER_GROUP Netty参数，单线程执行ChannelPipeline中的事件，默认值为True。该值控制执行ChannelPipeline中执行ChannelHandler的线程。如果为Trye，整个pipeline由一个线程执行，这样不需要进行线程切换以及线程同步，是Netty4的推荐做法；如果为False，ChannelHandler中的处理过程会由Group中的不同线程执行。</p></li><li><p>SO_SNDBUF Socket参数，TCP数据发送缓冲区大小。该缓冲区即TCP发送滑动窗口，linux操作系统可使用命令：cat /proc/sys/net/ipv4/tcp_smem查询其大小。</p></li><li><p>TCP_NODELAY TCP参数，立即发送数据，默认值为Ture（Netty默认为True而操作系统默认为False）。该值设置Nagle算法的启用，改算法将小的碎片数据连接成更大的报文来最小化所发送的报文的数量，如果需要发送一些较小的报文，则需要禁用该算法。Netty默认禁用该算法，从而最小化报文传输延时。</p></li><li><p>SO_KEEPALIVE Socket参数，连接保活，默认值为False。启用该功能时，TCP会主动探测空闲连接的有效性。可以将此功能视为TCP的心跳机制，需要注意的是：默认的心跳间隔是7200s即2小时。Netty默认关闭该功能。</p></li><li><p>SO_LINGER Socket参数，关闭Socket的延迟时间，默认值为-1，表示禁用该功能。-1表示socket.close()方法立即返回，但OS底层会将发送缓冲区全部发送到对端。0表示socket.close()方法立即返回，OS放弃发送缓冲区的数据直接向对端发送RST包，对端收到复位错误。非0整数值表示调用socket.close()方法的线程被阻塞直到延迟时间到或发送缓冲区中的数据发送完毕，若超时，则对端会收到复位错误。</p></li><li><p>IP_TOS IP参数，设置IP头部的Type-of-Service字段，用于描述IP包的优先级和QoS选项。</p></li><li><p>ALLOW_HALF_CLOSURE Netty参数，一个连接的远端关闭时本地端是否关闭，默认值为False。值为False时，连接自动关闭；为True时，触发ChannelInboundHandler的userEventTriggered()方法，事件为ChannelInputShutdownEvent。</p></li><li><p>SO_BROADCAST: Socket参数，设置广播模式。</p></li></ul><p>SO_SNDBUF:已说明</p><ul><li><p>IP_MULTICAST_LOOP_DISABLED: 对应IP参数IP_MULTICAST_LOOP，设置本地回环接口的多播功能。由于IP_MULTICAST_LOOP返回True表示关闭，所以Netty加上后缀_DISABLED防止歧义。</p></li><li><p>IP_MULTICAST_ADDR: 对应IP参数IP_MULTICAST_IF，设置对应地址的网卡为多播模式。</p></li><li><p>IP_MULTICAST_IF: 对应IP参数IP_MULTICAST_IF2，同上但支持IPV6。</p></li><li><p>IP_MULTICAST_TTL: IP参数，多播数据报的time-to-live即存活跳数。</p></li><li><p>IP_TOS: 已说明</p></li><li><p>DATAGRAM_CHANNEL_ACTIVE_ON_REGISTRATION: Netty参数，DatagramChannel注册的EventLoop即表示已激活。</p></li></ul>",3),p=[_];function a(T,o){return l(),t("div",null,p)}const S=e(n,[["render",a],["__file","netty-parameters.html.vue"]]);export{S as default};
