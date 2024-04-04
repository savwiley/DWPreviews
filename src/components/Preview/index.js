import React from "react";
import Layouts from "../Catalogue/Layouts.json";

const Preview = () => {
  return (
    <body class="page-recent one-column any-column one-column-split  logged-in my-journal not-subscribed has-access  has-navstrip">
      <div id="lj_controlstrip">
        <div id="lj_controlstrip_userpic">
          <a href="https://www.dreamwidth.org/manage/icons">
            <img
              src="https://v.dreamwidth.org/5525687/1942016"
              alt="Icon"
              title="Edit Icons"
              height="43"
              width="43"
            />
          </a>
        </div>
        <div id="lj_controlstrip_user">
          <form
            id="Greeting"
            class="nopic"
            action="https://www.dreamwidth.org/logout"
            method="post"
          >
            <div>
              <input
                type="hidden"
                name="lj_form_auth"
                value="c0:1599418800:1036:86400:znaZ1EM3Gn-1942016-14:de2a265c15acb48d0fc2f312273edff6"
              />
              <input type="hidden" name="user" value="spaaaaaaaaaace" />
              <input type="hidden" name="sessid" value="14" />
              <input type="hidden" name="ret" value="1" />
              <span
                lj:user="spaaaaaaaaaace"
                style="white-space: nowrap;"
                class="ljuser"
              >
                <a href="https://spaaaaaaaaaace.dreamwidth.org/profile">
                  <img
                    src="https://www.dreamwidth.org/img/silk/identity/user.png"
                    alt="[personal profile] "
                    width="17"
                    height="17"
                    style="vertical-align: text-bottom; border: 0; padding-right: 1px;"
                  />
                </a>
                <a href="https://spaaaaaaaaaace.dreamwidth.org/">
                  <b>spaaaaaaaaaace</b>
                </a>
              </span>
              <input
                type="submit"
                name="logout_one"
                value="Log out"
                id="Logout"
                class="submit"
              />{" "}
            </div>
          </form>
          <a href="https://www.dreamwidth.org/">Home</a>&nbsp;&nbsp;{" "}
          <a href="https://www.dreamwidth.org/update">Post</a>&nbsp;&nbsp;
          <a href="https://spaaaaaaaaaace.dreamwidth.org/read">Reading</a>
          &nbsp;&nbsp;
          <a href="https://www.dreamwidth.org/manage/settings/">Settings</a>
          &nbsp;&nbsp;<a href="https://www.dreamwidth.org/inbox/">Inbox</a>
        </div>
        <div id="lj_controlstrip_actionlinks">
          <span id="lj_controlstrip_statustext">
            You're viewing your journal
          </span>
          <br />
          <a href="https://www.dreamwidth.org/comments/recent">
            View Recent Comments
          </a>
          &nbsp;&nbsp;
          <a href="https://www.dreamwidth.org/editjournal">Manage Entries</a>
          &nbsp;&nbsp;
          <a href="https://www.dreamwidth.org/manage/circle/invite">
            Invite People
          </a>
        </div>

        <div id="lj_controlstrip_search">
          <div class="appwidget appwidget-search" id="LJWidget_62">
            <form action="https://www.dreamwidth.org/multisearch" method="post">
              <input
                type="text"
                size="20"
                id="search"
                class="text"
                title="Search"
                name="q"
              />{" "}
              <select name="type" class="select">
                <option value="int" selected="selected">
                  Interest
                </option>
                <option value="region">Region</option>
                <option value="nav_and_user">Site and Account</option>
                <option value="faq">FAQ</option>
                <option value="email">Email</option>
                <option value="im">IM Info</option>
              </select>{" "}
              <input type="submit" value="Go" />
            </form>
          </div>
          Reload page in style:&nbsp;&nbsp;
          <a href="https://spaaaaaaaaaace.dreamwidth.org/?style=light">light</a>
        </div>
      </div>

      <div id="canvas">
        <div class="inner">
          <div id="header">
            <div class="inner">
              <h1 id="title">
                <span>
                  <a href="https://spaaaaaaaaaace.dreamwidth.org">Header</a>
                </span>
              </h1>
              <h2 id="subtitle">
                <span>Subheader</span>
              </h2>
              <h2 id="pagetitle">
                <span>Recent Entries</span>
              </h2>
            </div>
          </div>
          <div id="content">
            <div class="inner">
              <div id="secondary">
                <div class="inner">
                  <div class="module-wrapper">
                    <div class="separator separator-before">
                      <div class="inner"></div>
                    </div>
                    <div class="module-section-one">
                      <div class="inner">
                        <div class="module-userprofile module">
                          <h2 class="module-header">
                            <a href="https://spaaaaaaaaaace.dreamwidth.org/profile">
                              Profile
                            </a>
                          </h2>
                          <div class="module-content">
                            <div class="userpic">
                              <a href="https://spaaaaaaaaaace.dreamwidth.org/icons">
                                <img
                                  src="https://v.dreamwidth.org/5525687/1942016"
                                  title="spaaaaaaaaaace: (Default)"
                                  alt="spaaaaaaaaaace: (Default)"
                                  height="100"
                                  width="100"
                                />
                              </a>
                            </div>
                            <div class="journal-name">Space Core</div>
                            <ul class="userlite-interaction-links text-links">
                              <li class="link watch first-item">
                                <a href="https://www.dreamwidth.org/manage/circle/add?user=spaaaaaaaaaace&action=subscribe">
                                  Subscribe
                                </a>
                              </li>
                              <li class="link post_entry">
                                <a href="https://www.dreamwidth.org/update?usejournal=spaaaaaaaaaace">
                                  Post Entry
                                </a>
                              </li>
                              <li class="link message">
                                <a href="https://www.dreamwidth.org/inbox/compose?user=spaaaaaaaaaace">
                                  Private Message
                                </a>
                              </li>
                              <li class="link tell_friend">
                                <a href="https://www.dreamwidth.org/tools/tellafriend?user=spaaaaaaaaaace">
                                  Tell Someone
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="module-navlinks module">
                          <div class="module-content">
                            <ul class="module-list">
                              <li class="module-list-item list-item-recent">
                                <a
                                  href="https://spaaaaaaaaaace.dreamwidth.org/"
                                  class="current recent"
                                >
                                  Recent Entries
                                </a>
                              </li>
                              <li class="module-list-item list-item-archive">
                                <a
                                  href="https://spaaaaaaaaaace.dreamwidth.org/archive"
                                  class="archive"
                                >
                                  Archive
                                </a>
                              </li>
                              <li class="module-list-item list-item-read">
                                <a
                                  href="https://spaaaaaaaaaace.dreamwidth.org/read"
                                  class="read"
                                >
                                  Reading
                                </a>
                              </li>
                              <li class="module-list-item list-item-tags">
                                <a
                                  href="https://spaaaaaaaaaace.dreamwidth.org/tag/"
                                  class="tags"
                                >
                                  Tags
                                </a>
                              </li>
                              <li class="module-list-item list-item-memories">
                                <a
                                  href="https://www.dreamwidth.org/tools/memories?user=spaaaaaaaaaace"
                                  class="memories"
                                >
                                  Memories
                                </a>
                              </li>
                              <li class="module-list-item list-item-userinfo">
                                <a
                                  href="https://spaaaaaaaaaace.dreamwidth.org/profile"
                                  class="userinfo"
                                >
                                  Profile
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="module-calendar module">
                          <h2 class="module-header">
                            <a href="/2020/09/">September</a>{" "}
                            <a href="/2020/">2020</a>
                          </h2>
                          <div class="module-content">
                            <table summary="Monthly calendar with links to each day's entries">
                              <tr>
                                <th>S</th>
                                <th>M</th>
                                <th>T</th>
                                <th>W</th>
                                <th>T</th>
                                <th>F</th>
                                <th>S</th>
                              </tr>
                              <tr>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td class="empty-day">1</td>
                                <td class="empty-day">2</td>
                                <td class="empty-day">3</td>
                                <td class="empty-day">4</td>
                                <td class="empty-day">5</td>
                              </tr>
                              <tr>
                                <td class="entry-day">
                                  {" "}
                                  <a
                                    href="https://spaaaaaaaaaace.dreamwidth.org/2020/09/06/"
                                    title="4 entries"
                                  >
                                    6
                                  </a>
                                </td>
                                <td class="empty-day">7</td>
                                <td class="empty-day">8</td>
                                <td class="empty-day">9</td>
                                <td class="empty-day">10</td>
                                <td class="empty-day">11</td>
                                <td class="empty-day">12</td>
                              </tr>
                              <tr>
                                <td class="empty-day">13</td>
                                <td class="empty-day">14</td>
                                <td class="empty-day">15</td>
                                <td class="empty-day">16</td>
                                <td class="empty-day">17</td>
                                <td class="empty-day">18</td>
                                <td class="empty-day">19</td>
                              </tr>
                              <tr>
                                <td class="empty-day">20</td>
                                <td class="empty-day">21</td>
                                <td class="empty-day">22</td>
                                <td class="empty-day">23</td>
                                <td class="empty-day">24</td>
                                <td class="empty-day">25</td>
                                <td class="empty-day">26</td>
                              </tr>
                              <tr>
                                <td class="empty-day">27</td>
                                <td class="empty-day">28</td>
                                <td class="empty-day">29</td>
                                <td class="empty-day">30</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                              </tr>
                            </table>
                          </div>
                        </div>
                        <div class="module-syndicate module">
                          <h2 class="module-header">Syndicate</h2>
                          <div class="module-content">
                            <a href="https://spaaaaaaaaaace.dreamwidth.org/data/rss">
                              <img
                                border="0"
                                width="32"
                                height="15"
                                alt="RSS"
                                title="RSS"
                                src="//www.dreamwidth.org/img/data_rss.gif"
                              />
                            </a>{" "}
                            <a href="https://spaaaaaaaaaace.dreamwidth.org/data/atom">
                              <img
                                border="0"
                                width="32"
                                height="15"
                                alt="Atom"
                                title="Atom"
                                src="//www.dreamwidth.org/img/data_atom.gif"
                              />
                            </a>{" "}
                          </div>
                        </div>
                        <div class="module-credit module">
                          <h2 class="module-header">Style Credit</h2>
                          <div class="module-content">
                            <ul class="module-list">
                              <li class="module-list-item">
                                <span class="category-title">Style:</span>{" "}
                                <span class="theme-name">Plain</span> for{" "}
                                <span class="style-name">
                                  <a href="https://www.dreamwidth.org/customize/?layoutid=551">
                                    Tabula Rasa
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="module-cuttagcontrols module">
                          <h2 class="module-header">Expand Cut Tags</h2>
                          <div class="module-content">
                            <span class="cutTagControls">
                              <span style="font-size: smaller;">
                                No cut tags
                              </span>
                            </span>
                          </div>
                        </div>
                        <div class="module-typelist module">
                          <h2 class="module-header">Links</h2>
                          <div class="module-content">
                            <ul class="module-list">
                              <li class="module-list-item">
                                <a href="https://ko-fi.com/linatrinch" title="">
                                  example
                                </a>
                              </li>
                              <li class="module-list-item">
                                <a href="https://ko-fi.com/linatrinch" title="">
                                  Example
                                </a>
                              </li>
                              <li class="module-list-item">
                                <a href="https://ko-fi.com/linatrinch" title="">
                                  Another EXAMPLE
                                </a>
                              </li>
                            </ul>
                            <div class="manage-link">
                              <a href="https://www.dreamwidth.org/customize/options?group=linkslist&authas=spaaaaaaaaaace">
                                Manage Links
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="module-customtext module">
                          <h2 class="module-header">Custom Text</h2>
                          <div class="module-content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed pulvinar ultricies leo, ut sollicitudin
                            libero porttitor id. Mauris convallis metus nibh, a
                            pharetra quam bibendum at. Quisque nibh est,
                            interdum eu lacus lobortis, blandit elementum nisi.
                            Quisque interdum elit urna, sed pretium est finibus
                            quis. Vestibulum leo neque, pellentesque ut
                            vestibulum at, suscipit at orci. In mollis dui ac
                            placerat euismod. Nam mollis, elit ut faucibus
                            vestibulum, dui risus vulputate tortor, fringilla
                            porttitor risus justo faucibus urna. In mollis
                            volutpat sem eget pharetra. Maecenas ut gravida
                            eros. Phasellus vel gravida nisl, vitae efficitur
                            mi. Cras at ante tincidunt, ultrices ante a,
                            consequat metus.
                          </div>
                        </div>

                        <div class="module-tags_list module">
                          <h2 class="module-header">
                            <a href="https://spaaaaaaaaaace.dreamwidth.org/tag/">
                              Most Popular Tags
                            </a>
                          </h2>
                          <div class="module-content">
                            <ul class="module-list">
                              <li class="visibility-private module-list-item">
                                <a href="https://spaaaaaaaaaace.dreamwidth.org/tag/livejournal">
                                  livejournal
                                </a>{" "}
                                - <span class="detail-tagcount">0 uses</span>
                              </li>

                              <li class="visibility-public module-list-item">
                                <a href="https://spaaaaaaaaaace.dreamwidth.org/tag/ooc">
                                  ooc
                                </a>{" "}
                                - <span class="detail-tagcount">1 use</span>
                              </li>

                              <li class="visibility-public module-list-item">
                                <a href="https://spaaaaaaaaaace.dreamwidth.org/tag/tag">
                                  tag
                                </a>{" "}
                                - <span class="detail-tagcount">1 use</span>
                              </li>

                              <li class="visibility-public module-list-item">
                                <a href="https://spaaaaaaaaaace.dreamwidth.org/tag/tag:+tag+tag">
                                  tag: tag tag
                                </a>{" "}
                                - <span class="detail-tagcount">1 use</span>
                              </li>

                              <li class="visibility-private module-list-item">
                                <a href="https://spaaaaaaaaaace.dreamwidth.org/tag/welcome">
                                  welcome
                                </a>{" "}
                                - <span class="detail-tagcount">0 uses</span>
                              </li>

                              <li class="visibility-public module-list-item">
                                <a href="https://spaaaaaaaaaace.dreamwidth.org/tag/woo">
                                  woo
                                </a>{" "}
                                - <span class="detail-tagcount">1 use</span>
                              </li>

                              <li class="visibility-public module-list-item">
                                <a href="https://spaaaaaaaaaace.dreamwidth.org/tag/yay">
                                  yay
                                </a>{" "}
                                - <span class="detail-tagcount">1 use</span>
                              </li>
                            </ul>
                            <div class="manage-link manage-tags-link">
                              <a href="https://www.dreamwidth.org/manage/tags?authas=spaaaaaaaaaace">
                                Manage Tags
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="separator separator-after">
                      <div class="inner"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="primary">
                <div class="inner">
                  <div id="entries" class="hfeed">
                    <div class="inner">
                      <div class="navigation topnav">
                        <div class="inner">
                          <ul>
                            <li class="page-back">
                              <a href="https://spaaaaaaaaaace.dreamwidth.org/?skip=3">
                                Previous 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        class="sticky-entry-wrapper entry-wrapper entry-wrapper-odd security-public restrictions-none journal-type-P poster-spaaaaaaaaaace journal-spaaaaaaaaaace has-userpic  has-subject"
                        id="sticky-entry-wrapper-1451"
                      >
                        <div class="separator separator-before">
                          <div class="inner"></div>
                        </div>
                        <div class="sticky-entry entry" id="sticky-entry-1451">
                          <div class="inner">
                            <div class="header">
                              <div class="inner">
                                <h3 class="sticky-entry-title entry-title">
                                  <span class="sticky-entry-icon">
                                    <img
                                      src="//www.dreamwidth.org/img/silk/entry/sticky_entry.png"
                                      title=""
                                      alt="[sticky entry]"
                                      height="16"
                                      width="16"
                                    />
                                  </span>
                                  Sticky:{" "}
                                  <a
                                    title="This one's sticky!"
                                    href="https://spaaaaaaaaaace.dreamwidth.org/1451.html"
                                  >
                                    This one's sticky!
                                  </a>
                                </h3>
                                <span class="datetime">
                                  <span class="date">
                                    <a href="/2020/09/">Sep</a>.{" "}
                                    <a href="/2020/09/06/">6th</a>,{" "}
                                    <a href="/2020/">2020</a>
                                  </span>{" "}
                                  <span class="time">02:08 pm</span>
                                </span>
                              </div>
                            </div>
                            <div>
                              <div class="contents">
                                <div class="inner">
                                  <div class="userpic">
                                    <a href="https://spaaaaaaaaaace.dreamwidth.org/icons">
                                      <img
                                        src="https://v.dreamwidth.org/5525688/1942016"
                                        title="spaaaaaaaaaace: team space"
                                        alt="spaaaaaaaaaace: (team space)"
                                        height="100"
                                        width="100"
                                      />
                                    </a>
                                  </div>
                                  <span class="poster entry-poster empty"></span>
                                  <div class="entry-content">
                                    <b>Lorem ipsum dolor sit amet,</b>{" "}
                                    consectetur adipiscing elit. Sed pulvinar
                                    ultricies leo, ut sollicitudin libero
                                    porttitor id. Mauris convallis metus nibh, a
                                    pharetra quam bibendum at. Quisque nibh est,
                                    interdum eu lacus lobortis, blandit
                                    elementum nisi. Quisque interdum elit urna,
                                    sed pretium est finibus quis. Vestibulum leo
                                    neque, pellentesque ut vestibulum at,
                                    suscipit at orci. In mollis dui ac placerat
                                    euismod. Nam mollis, elit ut faucibus
                                    vestibulum, dui risus vulputate tortor,
                                    fringilla porttitor risus justo faucibus
                                    urna. In mollis volutpat sem eget pharetra.
                                    Maecenas ut gravida eros. Phasellus vel
                                    gravida nisl, vitae efficitur mi. Cras at
                                    ante tincidunt, ultrices ante a, consequat
                                    metus. <a href="URL">example</a>
                                    <br />
                                    <br />
                                    <center>
                                      <img src="https://i.gifer.com/77L9.gif"></img>
                                      <br />
                                      <br />
                                      <span
                                        style="display: none;"
                                        id="span-cuttag_spaaaaaaaaaace_1451_1"
                                        class="cuttag"
                                      ></span>
                                      <b>
                                        (&nbsp;
                                        <a href="https://spaaaaaaaaaace.dreamwidth.org/1451.html#cutid1">
                                          Read more...
                                        </a>
                                        &nbsp;)
                                      </b>
                                      <div
                                        style="display: none;"
                                        id="div-cuttag_spaaaaaaaaaace_1451_1"
                                        aria-live="assertive"
                                      ></div>
                                    </center>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="footer">
                              <div class="inner">
                                <div class="tag">
                                  <span class="tag-text">Tags:</span>
                                  <ul>
                                    <li>
                                      <a
                                        rel="tag"
                                        href="https://spaaaaaaaaaace.dreamwidth.org/tag/woo"
                                      >
                                        woo
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <ul class="entry-management-links text-links">
                                  <li class="link edit_entry first-item">
                                    <a href="https://www.dreamwidth.org/editjournal?journal=spaaaaaaaaaace&amp;itemid=1451">
                                      Edit Entry
                                    </a>
                                  </li>
                                  <li class="link edit_tags">
                                    <a href="https://www.dreamwidth.org/edittags?journal=spaaaaaaaaaace&amp;itemid=1451">
                                      Edit Tags
                                    </a>
                                  </li>
                                  <li class="link mem_add">
                                    <a href="https://www.dreamwidth.org/tools/memadd?journal=spaaaaaaaaaace&amp;itemid=1451">
                                      Add Memory
                                    </a>
                                  </li>
                                  <li class="link tell_friend">
                                    <a href="https://www.dreamwidth.org/tools/tellafriend?journal=spaaaaaaaaaace&amp;itemid=1451">
                                      Share This Entry
                                    </a>
                                  </li>
                                  <li class="link watch_comments">
                                    <a
                                      href="https://www.dreamwidth.org/manage/tracking/entry?journal=spaaaaaaaaaace&amp;itemid=1451"
                                      lj_newentry_subid="0"
                                      class="TrackButton"
                                      lj_etypeid="3"
                                      lj_arg1="1451"
                                      js_swapname="Untrack This"
                                      lj_journalid="1942016"
                                      journal="spaaaaaaaaaace"
                                      lj_subid="0"
                                      lj_newentry_token="ajax:1599418800:1942016:14:/__rpc_esn_subs:addsub&1&1942016:28537f8efafa67f252a66e81b57bdd62b5f1ed0d"
                                      lj_newentry_etypeid="1"
                                      lj_auth_token="ajax:1599418800:1942016:14:/__rpc_esn_subs:addsub&1451&3&1942016:bb8a64d607ac4bd18f245b7a10129e5cb758d3a1"
                                    >
                                      Track This
                                    </a>
                                  </li>
                                </ul>
                                <ul
                                  class="entry-interaction-links text-links"
                                  data-quickreply-target="entry-spaaaaaaaaaace-1451-reply"
                                >
                                  <li class="entry-permalink first-item">
                                    <a href="https://spaaaaaaaaaace.dreamwidth.org/1451.html">
                                      Link
                                    </a>
                                  </li>
                                  <li
                                    class="entry-readlink"
                                    style="display:none"
                                  >
                                    <a
                                      href="https://spaaaaaaaaaace.dreamwidth.org/1451.html#comments"
                                      data-sing="1 comment"
                                      data-dual="2 comments"
                                      data-plur="3 comments"
                                    >
                                      0 comments
                                    </a>
                                  </li>
                                  <li class="entry-replylink">
                                    <a
                                      onclick='return function(that) {return quickreply("entry-spaaaaaaaaaace-1451-reply", 0, "",that)}(this)'
                                      href="https://spaaaaaaaaaace.dreamwidth.org/1451.html?mode=reply"
                                    >
                                      Reply
                                    </a>
                                  </li>
                                </ul>
                                <div
                                  id="ljqrtentry-spaaaaaaaaaace-1451-reply"
                                  data-quickreply-container="entry-spaaaaaaaaaace-1451-reply"
                                  style="display: none;"
                                ></div>

                                <div id="qrdiv" style="display: none;">
                                  <div id="qrformdiv">
                                    <form
                                      id="qrform"
                                      name="qrform"
                                      method="POST"
                                      action="https://www.dreamwidth.org/talkpost_do"
                                    >
                                      <input
                                        type="hidden"
                                        name="lj_form_auth"
                                        value="c0:1599418800:1036:86400:znaZ1EM3Gn-1942016-14:de2a265c15acb48d0fc2f312273edff6"
                                      />
                                      <input
                                        type="hidden"
                                        name="replyto"
                                        value=""
                                        id="replyto"
                                      />
                                      <input
                                        type="hidden"
                                        name="parenttalkid"
                                        value=""
                                        id="parenttalkid"
                                      />
                                      <input
                                        type="hidden"
                                        name="journal"
                                        value="spaaaaaaaaaace"
                                        id="journal"
                                      />
                                      <input
                                        type="hidden"
                                        name="itemid"
                                        value="1451"
                                        id="itemid"
                                      />
                                      <input
                                        type="hidden"
                                        name="usertype"
                                        value="cookieuser"
                                        id="usertype"
                                      />
                                      <input
                                        type="hidden"
                                        name="qr"
                                        value="1"
                                        id="qr"
                                      />
                                      <input
                                        type="hidden"
                                        name="cookieuser"
                                        value="spaaaaaaaaaace"
                                        id="cookieuser"
                                      />
                                      <input
                                        type="hidden"
                                        name="dtid"
                                        value=""
                                        id="dtid"
                                      />
                                      <input
                                        type="hidden"
                                        name="basepath"
                                        value="https://spaaaaaaaaaace.dreamwidth.org/1451.html?"
                                        id="basepath"
                                      />
                                      <input
                                        type="hidden"
                                        name="viewing_thread"
                                        value=""
                                        id="viewing_thread"
                                      />
                                      <input
                                        type="hidden"
                                        name="chrp1"
                                        value="1451-1942016-1599418800-9hufI9ssY4yrVr8l2l1i-75c96cf92f168be519bcc7a567809bac"
                                      />
                                      <div class="qr-meta">
                                        <span
                                          lj:user="spaaaaaaaaaace"
                                          style="white-space: nowrap;"
                                          class="ljuser"
                                        >
                                          <a href="https://spaaaaaaaaaace.dreamwidth.org/profile">
                                            <img
                                              src="https://www.dreamwidth.org/img/silk/identity/user.png"
                                              alt="[personal profile] "
                                              width="17"
                                              height="17"
                                              style="vertical-align: text-bottom; border: 0; padding-right: 1px;"
                                            />
                                          </a>
                                          <a href="https://spaaaaaaaaaace.dreamwidth.org/">
                                            <b>spaaaaaaaaaace</b>
                                          </a>
                                        </span>

                                        <input
                                          type="button"
                                          id="submitmoreopts"
                                          name="submitmoreopts"
                                          value="More Options"
                                        />

                                        <div class="qr-icon">
                                          {" "}
                                          <a href="https://spaaaaaaaaaace.dreamwidth.org/icons">
                                            <img
                                              src="https://v.dreamwidth.org/5525687/1942016"
                                              width="100"
                                              height="100"
                                              alt="spaaaaaaaaaace: (default)"
                                              title="spaaaaaaaaaace: default"
                                              class="userpic-img"
                                            />{" "}
                                          </a>{" "}
                                        </div>
                                        <div class="qr-icon-controls">
                                          <label
                                            for="prop_picture_keyword"
                                            class="invisible"
                                          >
                                            Icon to use:
                                          </label>
                                          <select
                                            class="select"
                                            name="prop_picture_keyword"
                                            id="prop_picture_keyword"
                                          >
                                            <option
                                              value=""
                                              selected="selected"
                                              data-description="(default)"
                                              data-url="https://v.dreamwidth.org/5525687/1942016"
                                            >
                                              (default)
                                            </option>
                                            <option
                                              value="basic profile"
                                              data-description="basic profile"
                                              data-url="https://v.dreamwidth.org/5525689/1942016"
                                            >
                                              basic profile
                                            </option>
                                            <option
                                              value="default"
                                              data-url="https://v.dreamwidth.org/5525687/1942016"
                                              data-description="default"
                                            >
                                              default
                                            </option>
                                            <option
                                              value="drawing"
                                              data-url="https://v.dreamwidth.org/5525693/1942016"
                                              data-description="drawing"
                                            >
                                              drawing
                                            </option>
                                            <option
                                              value="eat in space"
                                              data-url="https://v.dreamwidth.org/5525691/1942016"
                                              data-description="eat in space"
                                            >
                                              eat in space
                                            </option>
                                            <option
                                              value="GIF"
                                              data-url="https://v.dreamwidth.org/5525690/1942016"
                                              data-description="GIF"
                                            >
                                              GIF
                                            </option>
                                            <option
                                              value="laugh"
                                              data-url="https://v.dreamwidth.org/5525694/1942016"
                                              data-description="laugh"
                                            >
                                              laugh
                                            </option>
                                            <option
                                              value="pixel"
                                              data-url="https://v.dreamwidth.org/5525692/1942016"
                                              data-description="pixel"
                                            >
                                              pixel
                                            </option>
                                            <option
                                              value="team space"
                                              data-url="https://v.dreamwidth.org/5525688/1942016"
                                              data-description="team space"
                                            >
                                              team space
                                            </option>
                                            <option
                                              value="woooo"
                                              data-description="woooo"
                                              data-url="https://v.dreamwidth.org/5525695/1942016"
                                            >
                                              woooo
                                            </option>
                                          </select>
                                          <input
                                            type="button"
                                            id="randomicon"
                                            value="Random"
                                            style="display: none;"
                                          />
                                        </div>
                                      </div>

                                      <div class="qr-subject">
                                        <label for="subject" class="invisible">
                                          Subject
                                        </label>
                                        <input
                                          type="text"
                                          value=""
                                          maxlength="100"
                                          size="50"
                                          id="subject"
                                          class="text"
                                          placeholder="Subject"
                                          name="subject"
                                        />
                                      </div>

                                      <div class="qr-markup">
                                        <div class="qr-markup-type">
                                          <label
                                            for="prop_editor"
                                            class="invisible"
                                          >
                                            Formatting type
                                          </label>
                                          <select
                                            class="select"
                                            name="prop_editor"
                                            id="prop_editor"
                                          >
                                            <option
                                              value="html_casual1"
                                              selected="selected"
                                            >
                                              Casual HTML
                                            </option>
                                            <option value="markdown0">
                                              Markdown
                                            </option>
                                            <option value="html_raw0">
                                              Raw HTML
                                            </option>
                                          </select>
                                          <a
                                            href="https://www.dreamwidth.org/support/faqbrowse?faqid=271"
                                            tabindex="-1"
                                          >
                                            <img
                                              src="https://www.dreamwidth.org/img/silk/site/help.png"
                                              width="16"
                                              height="16"
                                              alt="More info about formatting"
                                              title="More info about formatting"
                                              border="0"
                                              style="vertical-align: middle;"
                                            />
                                          </a>
                                        </div>

                                        <div class="qr-markup-controls">
                                          <input
                                            type="button"
                                            id="comment-text-quote"
                                            value="Quote"
                                            tabindex="-1"
                                            class="js-only markup-button"
                                            style="display: none;"
                                            data-quote-error="To quote a portion of the original message, highlight it and press Quote."
                                          />
                                        </div>
                                      </div>

                                      <div class="qr-body">
                                        <label for="body" class="invisible">
                                          Message
                                        </label>
                                        <textarea
                                          rows="10"
                                          cols="80"
                                          id="body"
                                          class="text"
                                          wrap="soft"
                                          name="body"
                                        ></textarea>
                                      </div>

                                      <div class="qr-footer">
                                        {" "}
                                        <input
                                          type="submit"
                                          name="submitpost"
                                          value="Post Comment"
                                          id="submitpost"
                                          class="submit"
                                        />
                                        <input
                                          type="submit"
                                          name="submitpview"
                                          value="Preview"
                                          class="submit"
                                          id="submitpview"
                                        />
                                        <input
                                          type="hidden"
                                          name="submitpreview"
                                          value="0"
                                        />
                                        <div class="de">
                                          <strong>Notice:</strong> This account
                                          is set to log the IP addresses of
                                          everyone who comments.
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="separator separator-after">
                          <div class="inner"></div>
                        </div>
                      </div>
                      <div
                        class="entry-wrapper entry-wrapper-even security-public restrictions-none journal-type-P poster-spaaaaaaaaaace journal-spaaaaaaaaaace has-userpic  has-subject"
                        id="entry-wrapper-1201"
                      >
                        <div class="separator separator-before">
                          <div class="inner"></div>
                        </div>
                        <div class="entry" id="entry-1201">
                          <div class="inner">
                            <div class="header">
                              <div class="inner">
                                <h3 class="entry-title">
                                  <a
                                    title="(no subject)"
                                    href="https://spaaaaaaaaaace.dreamwidth.org/1201.html"
                                  >
                                    (no subject)
                                  </a>
                                </h3>
                                <span class="datetime">
                                  <span class="date">
                                    <a href="/2020/09/">Sep</a>.{" "}
                                    <a href="/2020/09/06/">6th</a>,{" "}
                                    <a href="/2020/">2020</a>
                                  </span>{" "}
                                  <span class="time">02:05 pm</span>
                                </span>
                              </div>
                            </div>
                            <div>
                              <div class="contents">
                                <div class="inner">
                                  <div class="userpic">
                                    <a href="https://spaaaaaaaaaace.dreamwidth.org/icons">
                                      <img
                                        src="https://v.dreamwidth.org/5525693/1942016"
                                        title="spaaaaaaaaaace: drawing"
                                        alt="spaaaaaaaaaace: (drawing)"
                                        height="100"
                                        width="100"
                                      />
                                    </a>
                                  </div>
                                  <span class="poster entry-poster empty"></span>
                                  <div class="entry-content">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed pulvinar ultricies leo,
                                    ut sollicitudin libero porttitor id. Mauris
                                    convallis metus nibh, a pharetra quam
                                    bibendum at. Quisque nibh est, interdum eu
                                    lacus lobortis, blandit elementum nisi.
                                    Quisque interdum elit urna, sed pretium est
                                    finibus quis. Vestibulum leo neque,
                                    pellentesque ut vestibulum at, suscipit at
                                    orci. In mollis dui ac placerat euismod. Nam
                                    mollis, elit ut faucibus vestibulum, dui
                                    risus vulputate tortor, fringilla porttitor
                                    risus justo faucibus urna. In mollis
                                    volutpat sem eget pharetra. Maecenas ut
                                    gravida eros. Phasellus vel gravida nisl,
                                    vitae efficitur mi. Cras at ante tincidunt,
                                    ultrices ante a, consequat metus.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="footer">
                              <div class="inner">
                                <div class="tag">
                                  <span class="tag-text">Tags:</span>
                                  <ul>
                                    <li>
                                      <a
                                        rel="tag"
                                        href="https://spaaaaaaaaaace.dreamwidth.org/tag/yay"
                                      >
                                        yay
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <ul class="entry-management-links text-links">
                                  <li class="link edit_entry first-item">
                                    <a href="https://www.dreamwidth.org/editjournal?journal=spaaaaaaaaaace&amp;itemid=1201">
                                      Edit Entry
                                    </a>
                                  </li>
                                  <li class="link edit_tags">
                                    <a href="https://www.dreamwidth.org/edittags?journal=spaaaaaaaaaace&amp;itemid=1201">
                                      Edit Tags
                                    </a>
                                  </li>
                                  <li class="link mem_add">
                                    <a href="https://www.dreamwidth.org/tools/memadd?journal=spaaaaaaaaaace&amp;itemid=1201">
                                      Add Memory
                                    </a>
                                  </li>
                                  <li class="link tell_friend">
                                    <a href="https://www.dreamwidth.org/tools/tellafriend?journal=spaaaaaaaaaace&amp;itemid=1201">
                                      Share This Entry
                                    </a>
                                  </li>
                                  <li class="link watch_comments">
                                    <a
                                      href="https://www.dreamwidth.org/manage/tracking/entry?journal=spaaaaaaaaaace&amp;itemid=1201"
                                      lj_newentry_subid="0"
                                      class="TrackButton"
                                      js_swapname="Untrack This"
                                      lj_arg1="1201"
                                      lj_etypeid="3"
                                      lj_subid="0"
                                      journal="spaaaaaaaaaace"
                                      lj_journalid="1942016"
                                      lj_newentry_token="ajax:1599418800:1942016:14:/__rpc_esn_subs:addsub&1&1942016:28537f8efafa67f252a66e81b57bdd62b5f1ed0d"
                                      lj_auth_token="ajax:1599418800:1942016:14:/__rpc_esn_subs:addsub&1201&3&1942016:bebe899d7bba961774d2dcfebe2a29a9258d8269"
                                      lj_newentry_etypeid="1"
                                    >
                                      Track This
                                    </a>
                                  </li>
                                </ul>
                                <ul
                                  class="entry-interaction-links text-links"
                                  data-quickreply-target="entry-spaaaaaaaaaace-1201-reply"
                                >
                                  <li class="entry-permalink first-item">
                                    <a href="https://spaaaaaaaaaace.dreamwidth.org/1201.html">
                                      Link
                                    </a>
                                  </li>
                                  <li
                                    class="entry-readlink"
                                    style="display:none"
                                  >
                                    <a
                                      href="https://spaaaaaaaaaace.dreamwidth.org/1201.html#comments"
                                      data-sing="1 comment"
                                      data-dual="2 comments"
                                      data-plur="3 comments"
                                    >
                                      0 comments
                                    </a>
                                  </li>
                                  <li class="entry-replylink">
                                    <a
                                      onclick='return function(that) {return quickreply("entry-spaaaaaaaaaace-1201-reply", 0, "",that)}(this)'
                                      href="https://spaaaaaaaaaace.dreamwidth.org/1201.html?mode=reply"
                                    >
                                      Reply
                                    </a>
                                  </li>
                                </ul>
                                <div
                                  id="ljqrtentry-spaaaaaaaaaace-1201-reply"
                                  data-quickreply-container="entry-spaaaaaaaaaace-1201-reply"
                                  style="display: none;"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="separator separator-after">
                          <div class="inner"></div>
                        </div>
                      </div>
                      <div
                        class="entry-wrapper entry-wrapper-odd security-public restrictions-none journal-type-P poster-spaaaaaaaaaace journal-spaaaaaaaaaace has-userpic  has-subject"
                        id="entry-wrapper-953"
                      >
                        <div class="separator separator-before">
                          <div class="inner"></div>
                        </div>
                        <div class="entry" id="entry-953">
                          <div class="inner">
                            <div class="header">
                              <div class="inner">
                                <h3 class="entry-title">
                                  <a
                                    title="Another Example"
                                    href="https://spaaaaaaaaaace.dreamwidth.org/953.html"
                                  >
                                    Another Example
                                  </a>
                                </h3>
                                <span class="datetime">
                                  <span class="date">
                                    <a href="/2020/09/">Sep</a>.{" "}
                                    <a href="/2020/09/06/">6th</a>,{" "}
                                    <a href="/2020/">2020</a>
                                  </span>{" "}
                                  <span class="time">02:04 pm</span>
                                </span>
                              </div>
                            </div>
                            <div>
                              <div class="contents">
                                <div class="inner">
                                  <div class="userpic">
                                    <a href="https://spaaaaaaaaaace.dreamwidth.org/icons">
                                      <img
                                        src="https://v.dreamwidth.org/5525687/1942016"
                                        title="spaaaaaaaaaace: (Default)"
                                        alt="spaaaaaaaaaace: (Default)"
                                        height="100"
                                        width="100"
                                      />
                                    </a>
                                  </div>
                                  <span class="poster entry-poster empty"></span>
                                  <div class="entry-content">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed pulvinar ultricies leo,
                                    ut sollicitudin libero porttitor id. Mauris
                                    convallis metus nibh, a pharetra quam
                                    bibendum at. Quisque nibh est, interdum eu
                                    lacus lobortis, blandit elementum nisi.
                                    Quisque interdum elit urna, sed pretium est
                                    finibus quis. Vestibulum leo neque,
                                    pellentesque ut vestibulum at, suscipit at
                                    orci. In mollis dui ac placerat euismod. Nam
                                    mollis, elit ut faucibus vestibulum, dui
                                    risus vulputate tortor, fringilla porttitor
                                    risus justo faucibus urna. In mollis
                                    volutpat sem eget pharetra. Maecenas ut
                                    gravida eros. Phasellus vel gravida nisl,
                                    vitae efficitur mi. Cras at ante tincidunt,
                                    ultrices ante a, consequat metus.
                                    <br />
                                    <blockquote>
                                      Aliquam laoreet ipsum vitae vestibulum
                                      pharetra. Quisque varius mollis dui, et
                                      euismod augue pharetra condimentum. Morbi
                                      egestas consectetur maximus. Suspendisse
                                      aliquet vel nibh nec maximus. Nulla at
                                      tortor arcu. Donec id sem tincidunt,
                                      eleifend lectus vel, blandit tellus. Sed
                                      consequat sodales enim, at facilisis
                                      turpis porta vel. Proin faucibus, ante
                                      vitae dignissim sodales, arcu nisi
                                      accumsan lorem, in pulvinar turpis quam
                                      eget ligula. Sed convallis dictum euismod.
                                      Cras mattis hendrerit nulla facilisis
                                      aliquam.
                                    </blockquote>
                                    <br />
                                    Sed convallis vestibulum neque ac cursus.
                                    Curabitur bibendum quam in eros dictum
                                    cursus. In consectetur pellentesque mi quis
                                    mattis. Mauris sit amet sapien tortor.
                                    Praesent justo felis, sollicitudin a sem
                                    sed, ornare suscipit lacus. Quisque dapibus
                                    lorem sit amet ipsum tincidunt, et imperdiet
                                    nulla feugiat. Mauris eget enim sem.
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="footer">
                              <div class="inner">
                                <div class="tag">
                                  <span class="tag-text">Tags:</span>
                                  <ul>
                                    <li>
                                      <a
                                        rel="tag"
                                        href="https://spaaaaaaaaaace.dreamwidth.org/tag/tag"
                                      >
                                        tag
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <ul class="entry-management-links text-links">
                                  <li class="link edit_entry first-item">
                                    <a href="https://www.dreamwidth.org/editjournal?journal=spaaaaaaaaaace&amp;itemid=953">
                                      Edit Entry
                                    </a>
                                  </li>
                                  <li class="link edit_tags">
                                    <a href="https://www.dreamwidth.org/edittags?journal=spaaaaaaaaaace&amp;itemid=953">
                                      Edit Tags
                                    </a>
                                  </li>
                                  <li class="link mem_add">
                                    <a href="https://www.dreamwidth.org/tools/memadd?journal=spaaaaaaaaaace&amp;itemid=953">
                                      Add Memory
                                    </a>
                                  </li>
                                  <li class="link tell_friend">
                                    <a href="https://www.dreamwidth.org/tools/tellafriend?journal=spaaaaaaaaaace&amp;itemid=953">
                                      Share This Entry
                                    </a>
                                  </li>
                                  <li class="link watch_comments">
                                    <a
                                      href="https://www.dreamwidth.org/manage/tracking/entry?journal=spaaaaaaaaaace&amp;itemid=953"
                                      lj_newentry_token="ajax:1599418800:1942016:14:/__rpc_esn_subs:addsub&1&1942016:28537f8efafa67f252a66e81b57bdd62b5f1ed0d"
                                      lj_auth_token="ajax:1599418800:1942016:14:/__rpc_esn_subs:addsub&953&3&1942016:30a386d4282d0174fee0e62697ff2982044ca347"
                                      lj_newentry_etypeid="1"
                                      class="TrackButton"
                                      lj_newentry_subid="0"
                                      lj_subid="0"
                                      journal="spaaaaaaaaaace"
                                      lj_journalid="1942016"
                                      js_swapname="Untrack This"
                                      lj_arg1="953"
                                      lj_etypeid="3"
                                    >
                                      Track This
                                    </a>
                                  </li>
                                </ul>
                                <ul
                                  class="entry-interaction-links text-links"
                                  data-quickreply-target="entry-spaaaaaaaaaace-953-reply"
                                >
                                  <li class="entry-permalink first-item">
                                    <a href="https://spaaaaaaaaaace.dreamwidth.org/953.html">
                                      Link
                                    </a>
                                  </li>
                                  <li
                                    class="entry-readlink"
                                    style="display:none"
                                  >
                                    <a
                                      href="https://spaaaaaaaaaace.dreamwidth.org/953.html#comments"
                                      data-sing="1 comment"
                                      data-dual="2 comments"
                                      data-plur="3 comments"
                                    >
                                      0 comments
                                    </a>
                                  </li>
                                  <li class="entry-replylink">
                                    <a
                                      onclick='return function(that) {return quickreply("entry-spaaaaaaaaaace-953-reply", 0, "",that)}(this)'
                                      href="https://spaaaaaaaaaace.dreamwidth.org/953.html?mode=reply"
                                    >
                                      Reply
                                    </a>
                                  </li>
                                </ul>
                                <div
                                  id="ljqrtentry-spaaaaaaaaaace-953-reply"
                                  data-quickreply-container="entry-spaaaaaaaaaace-953-reply"
                                  style="display: none;"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="separator separator-after">
                          <div class="inner"></div>
                        </div>
                      </div>

                      <div class="navigation bottomnav">
                        <div class="inner">
                          <ul>
                            <li class="page-back">
                              <a href="https://spaaaaaaaaaace.dreamwidth.org/?skip=3">
                                Previous 3
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="invisible-separator"
                style="float: left; width: 1px;"
              ></div>
              <div id="tertiary">
                <div class="inner">
                  <div class="module-wrapper">
                    <div class="separator separator-before">
                      <div class="inner"></div>
                    </div>
                    <div class="module-section-two">
                      <div class="inner">
                        <div class="module-pagesummary module">
                          <h2 class="module-header">Page Summary</h2>
                          <div class="module-content">
                            <ul class="module-list">
                              <li class="module-list-item">
                                <span class="pagesummary-subject">
                                  <a href="#entry-1451" title="0 comments">
                                    This one's sticky!
                                  </a>
                                </span>
                              </li>
                              <li class="module-list-item">
                                <span class="pagesummary-subject">
                                  <a href="#entry-1201" title="0 comments">
                                    <em>(no subject)</em>
                                  </a>
                                </span>
                              </li>
                              <li class="module-list-item">
                                <span class="pagesummary-subject">
                                  <a href="#entry-953" title="0 comments">
                                    Another Example
                                  </a>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="module-time module">
                          <div class="module-content">
                            <span id="load-time">
                              Page generated Sep. 6th, 2020 07:17 pm
                            </span>
                          </div>
                        </div>
                        <div class="module-powered module">
                          <div class="module-content">
                            <span id="site-branding">
                              Powered by{" "}
                              <a href="https://www.dreamwidth.org/">
                                Dreamwidth Studios
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="separator separator-after">
                      <div class="inner"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="content-footer"></div>
            </div>
          </div>
        </div>

        <div id="footer">
          <div class="inner">
            <div class="page-top">
              <a href="#">Top of page</a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Preview;
