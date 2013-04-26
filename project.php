<?php 
	$count = $_GET['count'];
	for ($i = 0; $i < $count; $i ++) {
?>
<article id="project1" class="project ad">
	<div class="content">
		<div class="description">
			<p class="title">Mercedes-Benz</p>
			<p class="tags">
				<a>官方</a>-<a>汽车</a>-<a>广告</a>
			</p>
			<p class="info">
				<a>1234</a>浏览 / <a>456</a>评论 / <a>21</a>推荐
			</p>
		</div>
		<footer>Mercedes-Benz</footer>
	</div>
</article>
<?php 
	}
?>
